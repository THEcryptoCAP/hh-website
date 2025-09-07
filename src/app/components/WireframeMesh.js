'use client';
import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';

export default function WireframeMesh() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const meshRef = useRef(null);
  const timeRef = useRef(0);
  const raycasterRef = useRef(null);
  const isHoveredRef = useRef(false);
  const rippleOriginRef = useRef(new THREE.Vector3());
  const backgroundObjectsRef = useRef([]);

  // Create wireframe geometry
  const createWireframeGeometry = useCallback(() => {
    // Create a dodecahedron for complex, interesting wireframe
    const geometry = new THREE.DodecahedronGeometry(3, 0);
    
    // Convert to wireframe by creating edges
    const edges = new THREE.EdgesGeometry(geometry);
    return edges;
  }, []);

  // Create wireframe material with enhanced glow effect
  const createWireframeMaterial = useCallback(() => {
    const material = new THREE.LineBasicMaterial({
      color: 0x8b7355, // Professional brown accent color
      transparent: true,
      opacity: 0.8, // Increased opacity for more definition
      linewidth: 2, // Thicker lines for more classy look
    });
    
    return material;
  }, []);

  // Create ripple effect geometry
  const createRippleGeometry = useCallback(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(100 * 3); // 100 ripple points
    const colors = new Float32Array(100 * 3);
    
    // Initialize ripple points
    for (let i = 0; i < 100; i++) {
      const i3 = i * 3;
      positions[i3] = 0;
      positions[i3 + 1] = 0;
      positions[i3 + 2] = 0;
      
      // Set ripple color (same as wireframe)
      colors[i3] = 0.545;     // R
      colors[i3 + 1] = 0.451; // G
      colors[i3 + 2] = 0.333; // B
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    return geometry;
  }, []);

  // Create ripple material
  const createRippleMaterial = useCallback(() => {
    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    
    return material;
  }, []);

  // Create background geometric objects
  const createBackgroundObjects = useCallback(() => {
    const objects = [];
    const objectCount = 25; // Small number for performance
    
    // Professional color palette
    const colors = [
      0x8b7355, // Primary brown
      0x6b4423, // Dark brown
      0xa0522d, // Sienna
      0x2c3e50, // Dark blue-gray
      0x34495e, // Blue-gray
    ];
    
    // Different geometric shapes
    const geometries = [
      new THREE.BoxGeometry(0.3, 0.3, 0.3),
      new THREE.SphereGeometry(0.2, 8, 6),
      new THREE.OctahedronGeometry(0.25, 0),
      new THREE.TetrahedronGeometry(0.2, 0),
      new THREE.ConeGeometry(0.15, 0.4, 6),
    ];
    
    for (let i = 0; i < objectCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const material = new THREE.MeshPhongMaterial({
        color: color,
        transparent: true,
        opacity: 0.4,
        emissive: new THREE.Color(color).multiplyScalar(0.3),
        shininess: 100,
      });
      
      const object = new THREE.Mesh(geometry, material);
      
      // Random positioning in background
      object.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10 - 5
      );
      
      // Random scale
      const scale = 0.5 + Math.random() * 1.5;
      object.scale.setScalar(scale);
      
      // Store animation properties
      object.userData = {
        originalPosition: object.position.clone(),
        originalScale: scale,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
        floatSpeed: Math.random() * 0.01 + 0.005,
        floatAmplitude: Math.random() * 0.5 + 0.2,
        mouseInfluence: Math.random() * 0.3 + 0.1,
        glowIntensity: 0,
        originalOpacity: 0.4,
      };
      
      objects.push(object);
    }
    
    return objects;
  }, []);

  // Initialize scene
  const initScene = useCallback(() => {
    if (!mountRef.current) return;

    try {
      // Scene with dark background
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
      camera.position.set(0, 0, 8);
      cameraRef.current = camera;

      // Renderer with anti-aliasing
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

      // Initialize raycaster
      raycasterRef.current = new THREE.Raycaster();

      // Subtle lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 0.2);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      // Create wireframe mesh
      const geometry = createWireframeGeometry();
      const material = createWireframeMaterial();
      const wireframe = new THREE.LineSegments(geometry, material);
      
      wireframe.position.set(0, 0, 0);
      wireframe.userData = {
        originalScale: 1,
        pulseIntensity: 0,
        rippleIntensity: 0,
        lineWidth: 1,
      };
      
      scene.add(wireframe);
      meshRef.current = wireframe;

      // Create ripple effect
      const rippleGeometry = createRippleGeometry();
      const rippleMaterial = createRippleMaterial();
      const ripple = new THREE.Points(rippleGeometry, rippleMaterial);
      
      ripple.visible = false;
      ripple.userData = {
        active: false,
        time: 0,
        duration: 1.0,
        originalPositions: rippleGeometry.attributes.position.array.slice(),
      };
      
      scene.add(ripple);

      // Create background objects
      const backgroundObjects = createBackgroundObjects();
      backgroundObjects.forEach(obj => {
        scene.add(obj);
      });
      backgroundObjectsRef.current = backgroundObjects;

    } catch (error) {
      console.error('Error initializing WireframeMesh scene:', error);
    }

  }, [createWireframeGeometry, createWireframeMaterial, createRippleGeometry, createRippleMaterial, createBackgroundObjects]);

  // Animation loop
  const animate = useCallback(() => {
    if (!sceneRef.current || !rendererRef.current || !cameraRef.current) return;

    try {
      timeRef.current += 0.016; // ~60fps

      // Animate wireframe mesh with enhanced effects
      if (meshRef.current) {
        const mesh = meshRef.current;
        
        // Enhanced rotation with mouse influence
        const mouseRotationX = mouseRef.current.y * 0.1;
        const mouseRotationY = mouseRef.current.x * 0.1;
        
        mesh.rotation.x += 0.005 + mouseRotationX * 0.002;
        mesh.rotation.y += 0.003 + mouseRotationY * 0.002;
        mesh.rotation.z += 0.002;
        
        // Enhanced pulse effect when hovered
        if (isHoveredRef.current) {
          mesh.userData.pulseIntensity = Math.min(mesh.userData.pulseIntensity + 0.08, 1);
        } else {
          mesh.userData.pulseIntensity = Math.max(mesh.userData.pulseIntensity - 0.03, 0);
        }
        
        // Apply enhanced pulse scaling
        const pulseScale = 1 + Math.sin(timeRef.current * 6) * mesh.userData.pulseIntensity * 0.15;
        mesh.scale.setScalar(pulseScale);
        
        // Enhanced line opacity and color based on pulse
        mesh.material.opacity = 0.8 + mesh.userData.pulseIntensity * 0.4;
        
        // Subtle color shift on hover
        if (isHoveredRef.current) {
          const colorShift = Math.sin(timeRef.current * 8) * 0.1;
          mesh.material.color.setHSL(0.1 + colorShift, 0.4, 0.4);
        } else {
          mesh.material.color.setHex(0x8b7355);
        }
      }

      // Animate background objects
      backgroundObjectsRef.current.forEach((object) => {
        const { rotationSpeed, floatSpeed, floatAmplitude, originalPosition, mouseInfluence, originalScale, originalOpacity } = object.userData;
        
        // Enhanced rotation
        object.rotation.x += rotationSpeed.x;
        object.rotation.y += rotationSpeed.y;
        object.rotation.z += rotationSpeed.z;
        
        // Floating motion
        object.position.y = originalPosition.y + Math.sin(timeRef.current * floatSpeed) * floatAmplitude;
        object.position.x = originalPosition.x + Math.cos(timeRef.current * floatSpeed * 0.7) * floatAmplitude * 0.3;
        
        // Enhanced mouse interaction
        const mouseInfluenceX = mouseRef.current.x * mouseInfluence * 2;
        const mouseInfluenceY = mouseRef.current.y * mouseInfluence * 2;
        
        object.position.x += (mouseInfluenceX - object.position.x) * 0.02;
        object.position.y += (mouseInfluenceY - object.position.y) * 0.02;
        
        // Glow effect based on mouse proximity
        const distanceToMouse = Math.sqrt(
          Math.pow(object.position.x - mouseInfluenceX, 2) + 
          Math.pow(object.position.y - mouseInfluenceY, 2)
        );
        
        const proximityThreshold = 3;
        if (distanceToMouse < proximityThreshold) {
          const proximity = 1 - (distanceToMouse / proximityThreshold);
          object.userData.glowIntensity = Math.max(object.userData.glowIntensity, proximity * 0.8);
        } else {
          object.userData.glowIntensity *= 0.95;
        }
        
        // Apply glow effects
        if (object.userData.glowIntensity > 0) {
          object.material.opacity = originalOpacity + object.userData.glowIntensity * 0.6;
          object.scale.setScalar(originalScale + object.userData.glowIntensity * 0.5);
          
          // Color enhancement
          const glowColor = new THREE.Color(object.material.color);
          glowColor.multiplyScalar(1 + object.userData.glowIntensity * 0.5);
          object.material.emissive.copy(glowColor).multiplyScalar(0.3 + object.userData.glowIntensity * 0.4);
        } else {
          object.material.opacity = originalOpacity;
          object.scale.setScalar(originalScale);
          object.material.emissive.setHex(object.material.color.getHex()).multiplyScalar(0.3);
        }
      });

      // Animate ripple effect
      sceneRef.current.traverse((object) => {
        if (object instanceof THREE.Points && object.userData.active) {
          const ripple = object;
          const { time, duration, originalPositions } = ripple.userData;
          
          ripple.userData.time += 0.016;
          const progress = ripple.userData.time / duration;
          
          if (progress >= 1) {
            ripple.visible = false;
            ripple.userData.active = false;
            return;
          }
          
          // Animate ripple points
          const positions = ripple.geometry.attributes.position;
          const colors = ripple.geometry.attributes.color;
          
          for (let i = 0; i < positions.count; i++) {
            const i3 = i * 3;
            
            // Calculate distance from ripple origin
            const x = originalPositions[i3] - rippleOriginRef.current.x;
            const y = originalPositions[i3 + 1] - rippleOriginRef.current.y;
            const z = originalPositions[i3 + 2] - rippleOriginRef.current.z;
            const distance = Math.sqrt(x * x + y * y + z * z);
            
            // Create ripple wave
            const wave = Math.sin((distance * 10) - (progress * Math.PI * 4)) * (1 - progress);
            const amplitude = wave * 0.5 * (1 - progress);
            
            positions.array[i3] = originalPositions[i3] + x * amplitude;
            positions.array[i3 + 1] = originalPositions[i3 + 1] + y * amplitude;
            positions.array[i3 + 2] = originalPositions[i3 + 2] + z * amplitude;
            
            // Fade out over time
            const alpha = (1 - progress) * 0.8;
            colors.array[i3] = 0.545 * alpha;
            colors.array[i3 + 1] = 0.451 * alpha;
            colors.array[i3 + 2] = 0.333 * alpha;
          }
          
          positions.needsUpdate = true;
          colors.needsUpdate = true;
        }
      });

      // Enhanced camera movement with more sensitivity
      cameraRef.current.position.x = mouseRef.current.x * 1.5;
      cameraRef.current.position.y = mouseRef.current.y * 1.5;
      cameraRef.current.position.z = 8 + Math.sin(timeRef.current * 0.5) * 0.5;

      rendererRef.current.render(sceneRef.current, cameraRef.current);
      animationIdRef.current = requestAnimationFrame(animate);
    } catch (error) {
      console.error('Error in WireframeMesh animate loop:', error);
    }
  }, []);

  // Handle mouse movement
  const handleMouseMove = useCallback((event) => {
    mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // Convert mouse position to world coordinates
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // Create raycaster for mouse interaction
    if (raycasterRef.current && cameraRef.current) {
      raycasterRef.current.setFromCamera(mouse, cameraRef.current);
      
      // Check intersection with wireframe mesh
      if (meshRef.current) {
        const intersects = raycasterRef.current.intersectObject(meshRef.current);
        
        if (intersects.length > 0) {
          isHoveredRef.current = true;
          
          // Store intersection point for ripple effect
          rippleOriginRef.current.copy(intersects[0].point);
        } else {
          isHoveredRef.current = false;
        }
      }
    }
  }, []);

  // Handle mouse click for ripple effect
  const handleMouseClick = useCallback((event) => {
    if (isHoveredRef.current && meshRef.current) {
      // Find ripple object in scene
      let rippleFound = false;
      sceneRef.current.traverse((object) => {
        if (!rippleFound && object instanceof THREE.Points && !object.userData.active) {
          const ripple = object;
          
          // Reset ripple
          ripple.userData.time = 0;
          ripple.userData.active = true;
          ripple.visible = true;
          
          // Reset positions to mesh surface
          const positions = ripple.geometry.attributes.position;
          const originalPositions = ripple.userData.originalPositions;
          
          for (let i = 0; i < positions.count; i++) {
            const i3 = i * 3;
            
            // Generate random points on mesh surface
            const phi = Math.acos(2 * Math.random() - 1);
            const theta = Math.random() * Math.PI * 2;
            const radius = 3 + Math.random() * 0.5;
            
            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);
            
            originalPositions[i3] = x;
            originalPositions[i3 + 1] = y;
            originalPositions[i3 + 2] = z;
            
            positions.array[i3] = x;
            positions.array[i3 + 1] = y;
            positions.array[i3 + 2] = z;
          }
          
          positions.needsUpdate = true;
          rippleFound = true;
        }
      });
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
    console.log('WireframeMesh: Initializing...');
    initScene();
    animate();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleMouseClick);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseClick);
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
  }, [initScene, animate, handleMouseMove, handleMouseClick, handleResize]);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none -z-10 three-js-container gpu-accelerated"
      style={{ 
        background: 'transparent',
        mixBlendMode: 'normal'
      }}
    />
  );
}
