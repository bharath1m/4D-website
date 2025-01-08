// src/components/Effects/ParticleSystem.jsx
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleSystem = ({ count = 1000 }) => {
  const particles = useRef();

  // Create particle positions
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;      // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;  // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;  // z
    }
    
    return positions;
  }, [count]);

  // Animate particles
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Update particle positions with sine wave motion
      particles.current.geometry.attributes.position.array[i3] += Math.sin(time + i) * 0.01;
      particles.current.geometry.attributes.position.array[i3 + 1] += Math.cos(time + i) * 0.01;
    }

    particles.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

export default ParticleSystem;