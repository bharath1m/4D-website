// src/components/Scene/RotatingRing.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';
import * as THREE from 'three';

const RotatingRing = ({ scrollProgress }) => {
  const ringRef = useRef();
  const glowRef = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    
    // Ring rotation
    ringRef.current.rotation.x = time * 0.2 + scrollProgress * Math.PI;
    ringRef.current.rotation.y = time * 0.1 + scrollProgress * Math.PI * 2;
    
    // Glow effect
    const glowIntensity = 1 + Math.sin(time * 2) * 0.3;
    glowRef.current.material.opacity = glowIntensity;
  });

  return (
    <group>
      <Torus
        ref={ringRef}
        args={[3, 0.05, 32, 100]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color="#ff00ff"
          metalness={0.8}
          roughness={0.2}
          emissive="#ff00ff"
          emissiveIntensity={2}
        />
      </Torus>
      
      {/* Glow effect */}
      <Torus
        ref={glowRef}
        args={[3.1, 0.2, 32, 100]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial
          color="#ff00ff"
          transparent
          opacity={0.5}
          side={THREE.DoubleSide}
        />
      </Torus>
    </group>
  );
};

export default RotatingRing;