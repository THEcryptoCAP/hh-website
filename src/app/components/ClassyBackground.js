'use client';
import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';

export default function ClassyBackground() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  // Create sophisticated background geometry
  const createBackgroundGeometry = useCallback(() => {
    const geometry = new THREE.PlaneGeometry(50, 50, 100, 100);
    const positions = geometry.attributes.position;
    
    // Add subtle wave deformation
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = Math.sin(x * 0.1) * Math.cos(y * 0.1) * 0.5;
      positions.setZ(i, z);
    }
    
    positions.needsUpdate = true;
    geometry.computeVertexNormals();
    
    return geometry;
  }, []);

  // Create gradient material
  const createGradientMaterial = useCallback(() => {
    const material = new THREE.MeshPhongMaterial({
      color: 0x1a1a2e,
      transparent: true,
      opacity: 0.8,
      shininess: 50,
      emissive: new THREE.Color(0x0a0a0a),
    });
    
    return material;
  }, []);

  // Initialize scene
  const initScene = useCallback(() => {
    if (!mountRef.current) return;

    try {
      // Scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0a0a0a);
      sceneRef.current = scene;

      // Camera
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 20;
      cameraRef.current = camera;

      // Renderer
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.8;
      rendererRef.current = renderer;

      mountRef.current.appendChild(renderer.domElement);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 0.2);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(10, 10, 10);
      scene.add(directionalLight);

      // Create background plane
      const backgroundGeometry = createBackgroundGeometry();
      const backgroundMaterial = createGradientMaterial();
      const background = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
      background.position.z = -10;
      scene.add(background);

      // Add floating geometric elements
      const geometries = [
        new THREE.OctahedronGeometry(0.5),
        new THREE.TetrahedronGeometry(0.5),
        new THREE.IcosahedronGeometry(0.5),
      ];
      
      const materials = [
        new THREE.MeshBasicMaterial({ 
          color: 0x8b7355, 
          transparent: true, 
          opacity: 0.3,
          wireframe: true 
        }),
        new THREE.MeshBasicMaterial({ 
          color: 0x6b4423, 
          transparent: true, 
          opacity: 0.3,
          wireframe: true 
        }),
        new THREE.MeshBasicMaterial({ 
          color: 0x4a3c2a, 
          transparent: true, 
          opacity: 0.3,
          wireframe: true 
        }),
      ];

      // Create floating elements
      for (let i = 0; i < 20; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const material = materials[Math.floor(Math.random() * materials.length)];
        const element = new THREE.Mesh(geometry, material);
        
        element.position.set(
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 50
        );
        
        element.userData = {
          originalPosition: element.position.clone(),
          rotationSpeed: {
            x: (Math.random() - 0.5) * 0.01,
            y: (Math.random() - 0.5) * 0.01,
            z: (Math.random() - 0.5) * 0.01,
          },
          floatSpeed: Math.random() * 0.005 + 0.002,
          floatAmplitude: Math.random() * 2 + 1,
        };
        
        scene.add(element);
      }

      // Add subtle particles
      const particleCount = 100;
      const particleGeometry = new THREE.BufferGeometry();
      const particlePositions = new Float32Array(particleCount * 3);
      const particleColors = new Float32Array(particleCount * 3);
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        particlePositions[i3] = (Math.random() - 0.5) * 200;
        particlePositions[i3 + 1] = (Math.random() - 0.5) * 200;
        particlePositions[i3 + 2] = (Math.random() - 0.5) * 100;
        
        const color = new THREE.Color();
        color.setHSL(0.1, 0.3, 0.4 + Math.random() * 0.2);
        particleColors[i3] = color.r;
        particleColors[i3 + 1] = color.g;
        particleColors[i3 + 2] = color.b;
      }
      
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
      
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.02,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });
      
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      particles.userData = { originalPositions: particlePositions.slice() };
      scene.add(particles);

    } catch (error) {
      console.error('Error initializing ClassyBackground scene:', error);
    }

  }, [createBackgroundGeometry, createGradientMaterial]);

  // Animation loop
  const animate = useCallback(() => {
    if (!sceneRef.current || !rendererRef.current || !cameraRef.current) return;

    try {
      const time = Date.now() * 0.001;

      // Animate floating elements
      sceneRef.current.traverse((object) => {
        if (object.userData && object.userData.rotationSpeed) {
          const { rotationSpeed, floatSpeed, floatAmplitude, originalPosition } = object.userData;
          
          // Rotation
          object.rotation.x += rotationSpeed.x;
          object.rotation.y += rotationSpeed.y;
          object.rotation.z += rotationSpeed.z;
          
          // Floating motion
          object.position.y = originalPosition.y + Math.sin(time * floatSpeed) * floatAmplitude;
          object.position.x = originalPosition.x + Math.cos(time * floatSpeed * 0.7) * floatAmplitude * 0.5;
          
          // Scroll-based parallax
          object.position.z = originalPosition.z + scrollRef.current * 0.01;
        }
      });

      // Animate particles
      sceneRef.current.traverse((object) => {
        if (object instanceof THREE.Points && object.userData.originalPositions) {
          const positions = object.geometry.attributes.position;
          const originalPositions = object.userData.originalPositions;
          
          for (let i = 0; i < positions.count; i++) {
            const i3 = i * 3;
            const timeOffset = i * 0.01;
            
            positions.array[i3] = originalPositions[i3] + Math.sin(time + timeOffset) * 0.5;
            positions.array[i3 + 1] = originalPositions[i3 + 1] + Math.cos(time + timeOffset) * 0.5;
            positions.array[i3 + 2] = originalPositions[i3 + 2] + Math.sin(time * 0.5 + timeOffset) * 0.3;
          }
          
          positions.needsUpdate = true;
        }
      });

      // Camera movement based on mouse
      cameraRef.current.position.x = mouseRef.current.x * 0.2;
      cameraRef.current.position.y = mouseRef.current.y * 0.2;
      cameraRef.current.lookAt(0, 0, 0);

      rendererRef.current.render(sceneRef.current, cameraRef.current);
      animationIdRef.current = requestAnimationFrame(animate);
    } catch (error) {
      console.error('Error in ClassyBackground animate loop:', error);
    }
  }, []);

  // Handle mouse movement
  const handleMouseMove = useCallback((event) => {
    mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }, []);

  // Handle scroll
  const handleScroll = useCallback(() => {
    scrollRef.current = window.scrollY;
  }, []);

  // Handle window resize
  const handleResize = useCallback(() => {
    if (!cameraRef.current || !rendererRef.current) return;
    
    cameraRef.current.aspect = window.innerWidth / window.innerHeight;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
  }, []);

  useEffect(() => {
    console.log('ClassyBackground: Initializing...');
    initScene();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Cleanup
      if (sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
    };
  }, [initScene, animate, handleMouseMove, handleScroll, handleResize]);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none z-0 three-js-container gpu-accelerated"
      style={{ 
        background: 'transparent',
        mixBlendMode: 'multiply'
      }}
    />
  );
}

