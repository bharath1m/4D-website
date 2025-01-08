// src/components/Scene/FourDObjects.jsx
import React, { useRef, useEffect } from 'react';  // Add useRef here
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FourDObjects = () => {
  const objectsRef = useRef();
  const time = useRef(0);

  useFrame(() => {
    time.current += 0.005;
    
    if (objectsRef.current) {
      objectsRef.current.rotation.x = time.current;
      objectsRef.current.rotation.y = time.current * 0.5;
      
      objectsRef.current.scale.x = Math.sin(time.current) * 0.5 + 1;
      objectsRef.current.scale.y = Math.cos(time.current) * 0.5 + 1;
      objectsRef.current.scale.z = Math.sin(time.current * 0.5) * 0.5 + 1;
    }
  });

  return (
    <group ref={objectsRef}>
      <mesh position={[2, 0, 0]}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial
          color="#ff00ff"
          metalness={0.8}
          roughness={0.2}
          wireframe
        />
      </mesh>

      <mesh position={[-2, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#00ffff"
          metalness={0.8}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </group>
  );
};

export default FourDObjects;