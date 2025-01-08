// src/components/Scene/AtmosphericBackground.jsx
import React from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const AtmosphericBackground = () => {
  const { scene } = useThree();

  // Add fog
  scene.fog = new THREE.FogExp2('#1a0b2e', 0.05);

  return (
    <group>
      {/* Ambient particles */}
      <points>
        <bufferGeometry>
          <float32BufferAttribute
            attach="attributes-position"
            count={1000}
            array={new Float32Array(3000).map(() => Math.random() * 40 - 20)}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#ff00ff"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Background glow spots */}
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.random() * 20 - 10,
            Math.random() * 10 - 5,
            -10
          ]}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial
            color={i % 2 ? '#ff00ff' : '#00ffff'}
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
};

export default AtmosphericBackground;