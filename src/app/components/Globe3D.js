'use client';
import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';

export default function Globe3D() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const globeRef = useRef(null);
  const timeRef = useRef(0);
  const isHoveredRef = useRef(false);

  // Create globe geometry
  const createGlobeGeometry = useCallback(() => {
    const geometry = new THREE.SphereGeometry(2, 64, 32);
    return geometry;
  }, []);

  // Create globe material with wireframe and solid combination
  const createGlobeMaterial = useCallback(() => {
    // Solid material
    const solidMaterial = new THREE.MeshPhongMaterial({
      color: 0x1a1a1a,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    });

    // Wireframe material
    const wireframeGeometry = new THREE.SphereGeometry(2.01, 32, 16);
    const wireframe = new THREE.WireframeGeometry(wireframeGeometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: 0x8b7355,
      transparent: true,
      opacity: 0.8,
      linewidth: 1,
    });

    return { solidMaterial, wireframe, wireframeMaterial };
  }, []);

  // Create atmospheric glow effect
  const createAtmosphere = useCallback(() => {
    const atmosphereGeometry = new THREE.SphereGeometry(2.1, 32, 16);
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x8b7355,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide,
    });
    
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    return atmosphere;
  }, []);

  // Create connection lines (representing global connections)
  const createConnectionLines = useCallback(() => {
    const lines = [];
    const lineCount = 20;
    
    for (let i = 0; i < lineCount; i++) {
      const points = [];
      const segments = 20;
      
      // Create curved lines around the globe
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const angle = t * Math.PI * 2;
        const radius = 2.05 + Math.sin(angle * 3) * 0.1;
        
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle) * Math.cos(t * Math.PI);
        const z = radius * Math.sin(angle) * Math.sin(t * Math.PI);
        
        points.push(new THREE.Vector3(x, y, z));
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: 0x8b7355,
        transparent: true,
        opacity: 0.3,
      });
      
      const line = new THREE.Line(geometry, material);
      line.rotation.x = (Math.PI * 2 * i) / lineCount;
      line.rotation.y = (Math.PI * 2 * i) / lineCount;
      lines.push(line);
    }
    
    return lines;
  }, []);

  // Create floating particles around the globe
  const createParticles = useCallback(() => {
    const particleCount = 50;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Random position around the globe
      const radius = 2.5 + Math.random() * 1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // Color based on distance from globe
      const colorIntensity = 0.3 + Math.random() * 0.7;
      colors[i3] = 0.545 * colorIntensity;     // R
      colors[i3 + 1] = 0.451 * colorIntensity; // G
      colors[i3 + 2] = 0.333 * colorIntensity; // B
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    
    const particles = new THREE.Points(geometry, material);
    return particles;
  }, []);

  // Initialize scene
  const initScene = useCallback(() => {
    if (!mountRef.current) return;

    try {
      // Scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);
      sceneRef.current = scene;

      // Camera
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 6);
      cameraRef.current = camera;

      // Renderer
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.0;
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      rendererRef.current = renderer;

      mountRef.current.appendChild(renderer.domElement);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 5, 5);
      directionalLight.castShadow = true;
      scene.add(directionalLight);

      const pointLight = new THREE.PointLight(0x8b7355, 0.5, 100);
      pointLight.position.set(0, 0, 3);
      scene.add(pointLight);

      // Create globe
      const globeGeometry = createGlobeGeometry();
      const { solidMaterial, wireframe, wireframeMaterial } = createGlobeMaterial();
      
      // Solid globe
      const globe = new THREE.Mesh(globeGeometry, solidMaterial);
      globe.castShadow = true;
      globe.receiveShadow = true;
      globe.userData = {
        originalScale: 1,
        pulseIntensity: 0,
      };
      scene.add(globe);
      globeRef.current = globe;

      // Wireframe overlay
      const wireframeLines = new THREE.LineSegments(wireframe, wireframeMaterial);
      scene.add(wireframeLines);

      // Atmosphere
      const atmosphere = createAtmosphere();
      scene.add(atmosphere);

      // Connection lines
      const connectionLines = createConnectionLines();
      connectionLines.forEach(line => scene.add(line));

      // Particles
      const particles = createParticles();
      scene.add(particles);

    } catch (error) {
      console.error('Error initializing Globe3D scene:', error);
    }
  }, [createGlobeGeometry, createGlobeMaterial, createAtmosphere, createConnectionLines, createParticles]);

  // Animation loop
  const animate = useCallback(() => {
    if (!sceneRef.current || !rendererRef.current || !cameraRef.current) return;

    try {
      timeRef.current += 0.016;

      // Animate globe
      if (globeRef.current) {
        const globe = globeRef.current;
        
        // Rotation
        globe.rotation.y += 0.005;
        globe.rotation.x += 0.002;
        
        // Mouse influence
        const mouseRotationX = mouseRef.current.y * 0.1;
        const mouseRotationY = mouseRef.current.x * 0.1;
        
        globe.rotation.x += mouseRotationX * 0.01;
        globe.rotation.y += mouseRotationY * 0.01;
        
        // Pulse effect when hovered
        if (isHoveredRef.current) {
          globe.userData.pulseIntensity = Math.min(globe.userData.pulseIntensity + 0.05, 1);
        } else {
          globe.userData.pulseIntensity = Math.max(globe.userData.pulseIntensity - 0.02, 0);
        }
        
        const pulseScale = 1 + Math.sin(timeRef.current * 4) * globe.userData.pulseIntensity * 0.1;
        globe.scale.setScalar(pulseScale);
        
        // Material opacity based on pulse
        globe.material.opacity = 0.3 + globe.userData.pulseIntensity * 0.2;
      }

      // Animate particles
      sceneRef.current.traverse((object) => {
        if (object instanceof THREE.Points) {
          const positions = object.geometry.attributes.position;
          const colors = object.geometry.attributes.color;
          
          for (let i = 0; i < positions.count; i++) {
            const i3 = i * 3;
            
            // Rotate particles around the globe
            const x = positions.array[i3];
            const y = positions.array[i3 + 1];
            const z = positions.array[i3 + 2];
            
            // Apply rotation
            const angle = timeRef.current * 0.01;
            const newX = x * Math.cos(angle) - z * Math.sin(angle);
            const newZ = x * Math.sin(angle) + z * Math.cos(angle);
            
            positions.array[i3] = newX;
            positions.array[i3 + 2] = newZ;
            
            // Fade in/out effect
            const fade = (Math.sin(timeRef.current * 2 + i * 0.1) + 1) * 0.5;
            colors.array[i3] = 0.545 * fade;
            colors.array[i3 + 1] = 0.451 * fade;
            colors.array[i3 + 2] = 0.333 * fade;
          }
          
          positions.needsUpdate = true;
          colors.needsUpdate = true;
        }
      });

      // Camera movement
      cameraRef.current.position.x = mouseRef.current.x * 0.5;
      cameraRef.current.position.y = mouseRef.current.y * 0.5;
      cameraRef.current.position.z = 6 + Math.sin(timeRef.current * 0.3) * 0.2;

      rendererRef.current.render(sceneRef.current, cameraRef.current);
      animationIdRef.current = requestAnimationFrame(animate);
    } catch (error) {
      console.error('Error in Globe3D animate loop:', error);
    }
  }, []);

  // Handle mouse movement
  const handleMouseMove = useCallback((event) => {
    mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // Check if mouse is over the globe area
    const rect = mountRef.current?.getBoundingClientRect();
    if (rect) {
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
      const threshold = rect.width * 0.3;
      
      isHoveredRef.current = distance < threshold;
    }
  }, []);

  // Handle window resize
  const handleResize = useCallback(() => {
    if (!cameraRef.current || !rendererRef.current) return;
    
    cameraRef.current.aspect = window.innerWidth / window.innerHeight;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }, []);

  useEffect(() => {
    console.log('Globe3D: Initializing...');
    initScene();
    animate();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Cleanup Three.js objects
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
  }, [initScene, animate, handleMouseMove, handleResize]);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full pointer-events-none"
      style={{ 
        background: 'transparent',
        mixBlendMode: 'normal'
      }}
    />
  );
}
