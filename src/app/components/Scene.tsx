'use client';

import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import ColorPicker from './ColorPicker';
import ShapeDropdown from './ShapeDropdown';

/**
 * Scene component renders a 3D interactive scene using Three.js.
 * Users can:
 *  - Choose between different shapes (Cube, Sphere, Cylinder, Cone, Heart).
 *  - Change the color of the shape.
 *  - Rotate the shape interactively with mouse drag.
 */
const Scene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  // State to control the shape type and color.
  const [shape, setShape] = useState<'CUBE' | 'SPHERE' | 'HEART' | 'CYLINDER' | 'CONE'>('HEART');
  const [color, setColor] = useState<string>('#000'); // Default color black

  // Utility function to debounce frequent calls (e.g., color change).
  const debounce = <T extends (...args: string[]) => void>(func: T, delay: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>): void => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  // Debounced handler for color changes.
  const handleColorChange = debounce((newColor: string) => {
    setColor(newColor);
  }, 300);

  useEffect(() => {
    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true; // Enable shadow maps
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xedebeb); // White background

    // Create a scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 10, 30);

    // Mount the renderer to the DOM
    if (mountRef.current) {
      mountRef.current.innerHTML = ''; // Clear previous renders
      mountRef.current.appendChild(renderer.domElement);
    }

    // Add directional light with shadows
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 20, 20);
    light.castShadow = true;
    scene.add(light);

    // Add a shadow plane
    const planeGeometry = new THREE.PlaneGeometry(200, 200);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.2 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -15;
    plane.receiveShadow = true;
    scene.add(plane);

    // Geometry and material for the shape
    let geometry: THREE.BufferGeometry;
    const material = new THREE.MeshStandardMaterial({ color: new THREE.Color(color) });

    // Create the shape based on the selected type
    switch (shape) {
      case 'SPHERE':
        geometry = new THREE.SphereGeometry(5, 32, 16);
        break;
      case 'CYLINDER':
        geometry = new THREE.CylinderGeometry(4, 4, 10, 32);
        break;
      case 'CONE':
        geometry = new THREE.ConeGeometry(5, 10, 14);
        break;
      case 'HEART':
        // Heart shape creation
        const x = 0, y = 0;
        const scaleFactor = 0.5; // Scale factor to reduce the size

        const heartShape = new THREE.Shape();
        heartShape.moveTo(x + 5 * scaleFactor, y + 5 * scaleFactor);
        heartShape.bezierCurveTo(x + 5 * scaleFactor, y + 5 * scaleFactor, x + 4 * scaleFactor, y, x, y);
        heartShape.bezierCurveTo(x - 6 * scaleFactor, y, x - 6 * scaleFactor, y + 7 * scaleFactor, x - 6 * scaleFactor, y + 7 * scaleFactor);
        heartShape.bezierCurveTo(x - 6 * scaleFactor, y + 11 * scaleFactor, x - 3 * scaleFactor, y + 15.4 * scaleFactor, x + 5 * scaleFactor, y + 19 * scaleFactor);
        heartShape.bezierCurveTo(x + 12 * scaleFactor, y + 15.4 * scaleFactor, x + 16 * scaleFactor, y + 11 * scaleFactor, x + 16 * scaleFactor, y + 7 * scaleFactor);
        heartShape.bezierCurveTo(x + 16 * scaleFactor, y + 7 * scaleFactor, x + 16 * scaleFactor, y, x + 10 * scaleFactor, y);
        heartShape.bezierCurveTo(x + 7 * scaleFactor, y, x + 5 * scaleFactor, y + 5 * scaleFactor, x + 5 * scaleFactor, y + 5 * scaleFactor);

        // Define extrude settings (e.g., depth and bevel)
        const extrudeSettings = {
          depth: 2 * scaleFactor, // Thickness of the heart
          bevelEnabled: true,     // Enable bevel for rounded edges
          bevelThickness: 0.5 * scaleFactor,  // Thickness of the bevel
          bevelSize: 1 * scaleFactor,        // Size of the bevel
        };

        // Create the extruded geometry for the heart shape
        geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
        break;

      case 'CUBE':
      default:
        geometry = new THREE.BoxGeometry(8, 8, 8);
    }

    // Adjust shape position and shadow settings
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = false;

    // Center the geometry for accurate rotation
    geometry.computeBoundingBox();
    const boundingBox = geometry.boundingBox!;
    const offsetX = -(boundingBox.max.x + boundingBox.min.x) / 2;
    const offsetY = -(boundingBox.max.y + boundingBox.min.y) / 2;
    const offsetZ = -(boundingBox.max.z + boundingBox.min.z) / 2;
    geometry.translate(offsetX, offsetY, offsetZ);

    scene.add(mesh);

    // Handle window resizing
    const onResize = () => {
      const width = mountRef.current?.clientWidth || window.innerWidth;
      const height = mountRef.current?.clientHeight || window.innerHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    // Mouse interaction for rotating the shape
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onPointerDown = (event: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const onPointerMove = (event: MouseEvent) => {
      if (isDragging) {
        const deltaMove = {
          x: event.clientX - previousMousePosition.x,
          y: event.clientY - previousMousePosition.y,
        };

        mesh.rotation.y += deltaMove.x * 0.01;
        mesh.rotation.x += deltaMove.y * 0.01;

        previousMousePosition = { x: event.clientX, y: event.clientY };
      }
    };

    const onPointerUp = () => (isDragging = false);
    const onPointerLeave = () => (isDragging = false);

    // Add event listeners
    if (mountRef.current) {
      mountRef.current.addEventListener('mousedown', onPointerDown);
      mountRef.current.addEventListener('mousemove', onPointerMove);
      mountRef.current.addEventListener('mouseup', onPointerUp);
      mountRef.current.addEventListener('mouseleave', onPointerLeave);
      window.addEventListener('resize', onResize);
    }

    // Animation loop
    const animate = () => {
      if (!isDragging) {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
        mountRef.current.removeEventListener('mousedown', onPointerDown);
        mountRef.current.removeEventListener('mousemove', onPointerMove);
        mountRef.current.removeEventListener('mouseup', onPointerUp);
        mountRef.current.removeEventListener('mouseleave', onPointerLeave);
        window.removeEventListener('resize', onResize);
      }
    };
  }, [shape, color]);

  return (
    <div className="relative w-full flex items-center mt-14 pb-20">
      {/* Container for the 3D scene */}
      <div ref={mountRef} className="absolute w-full flex items-center mt-80"></div>

      {/* Controls for shape and color */}
      <div className="absolute flex flex-col sm:flex-row items-center justify-center w-full sm:gap-0 z-10 mt-44">
        <ColorPicker color={color} onColorChange={handleColorChange} />
        <ShapeDropdown shape={shape} onShapeChange={setShape} />
      </div>
    </div>
  );
};

export default Scene;