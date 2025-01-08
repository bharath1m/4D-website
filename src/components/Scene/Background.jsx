// src/components/Scene/Background.jsx
import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Background = () => {
  const { scene } = useThree();
  const particlesRef = useRef();

  // Create gradient background
  const gradientTexture = new THREE.CanvasTexture(
    (() => {
      const canvas = document.createElement('canvas');
      canvas.width = 2;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      
      gradient.addColorStop(0, '#1a0b2e');
      gradient.addColorStop(0.3, '#2b0548');
      gradient.addColorStop(0.6, '#1e0934');
      gradient.addColorStop(1, '#04011c');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      return canvas;
    })()
  );

  scene.background = gradientTexture;
  scene.fog = new THREE.FogExp2('#1a0b2e', 0.05);

  // Create particles
  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = Math.random() * 10 - 2;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

    const color = new THREE.Color(Math.random() < 0.5 ? '#ff00ff' : '#00ffff');
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group>
      {/* Background particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleCount}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Light beams */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(i / 8 * Math.PI * 2) * 8,
            3,
            Math.cos(i / 8 * Math.PI * 2) * 8
          ]}
          rotation={[0, i / 8 * Math.PI * 2, 0]}
        >
          <planeGeometry args={[0.1, 6]} />
          <meshBasicMaterial
            color="#ff00ff"
            transparent
            opacity={0.1}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
};

export default Background;