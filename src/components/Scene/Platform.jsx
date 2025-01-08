// src/components/Scene/Platform.jsx
import React from 'react';
import { Plane } from '@react-three/drei';
import * as THREE from 'three';

const Platform = () => {
  return (
    <group>
      {/* Base Platform (Full screen) */}
      <group position={[0, -2, 0]}>
        <Plane 
          args={[50, 50]} 
          rotation-x={-Math.PI / 2}
          receiveShadow
        >
          <meshStandardMaterial
            color="#1a0b2e"
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.9}
          />
        </Plane>

        {/* Base platform grid */}
        <gridHelper
          args={[50, 50, '#ff00ff', '#ff00ff']}
          position={[0, 0.01, 0]}
          opacity={0.1}
          transparent
        />

        {/* Base platform glow */}
        <Plane
          args={[50.2, 50.2]}
          rotation-x={-Math.PI / 2}
          position={[0, 0.02, 0]}
        >
          <meshBasicMaterial
            color="#ff00ff"
            transparent
            opacity={0.05}
            side={THREE.DoubleSide}
          />
        </Plane>
      </group>

      {/* Elevated Platform (For Cube) */}
      <group position={[0, 0, 0]}>
        {/* Main elevated platform */}
        <Plane 
          args={[8, 8]} 
          rotation-x={-Math.PI / 2}
          receiveShadow
        >
          <meshStandardMaterial
            color="#2b0548"
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.95}
          />
        </Plane>

        {/* Elevated platform grid */}
        <gridHelper
          args={[8, 16, '#ff00ff', '#ff00ff']}
          position={[0, 0.01, 0]}
          opacity={0.3}
          transparent
        />

        {/* Glowing border */}
        <Plane
          args={[8.2, 8.2]}
          rotation-x={-Math.PI / 2}
          position={[0, 0.02, 0]}
        >
          <meshBasicMaterial
            color="#ff00ff"
            transparent
            opacity={0.2}
            side={THREE.DoubleSide}
          />
        </Plane>

        {/* Corner decorations */}
        {[[-4, -4], [4, -4], [-4, 4], [4, 4]].map(([x, z], i) => (
          <group key={i} position={[x, 0, z]}>
            <mesh>
              <boxGeometry args={[0.3, 0.1, 0.3]} />
              <meshBasicMaterial color="#ff00ff" />
            </mesh>
            <pointLight color="#ff00ff" intensity={0.5} distance={2} />
          </group>
        ))}

        {/* Glowing ring around platform */}
        <mesh rotation-x={-Math.PI / 2} position={[0, 0.03, 0]}>
          <ringGeometry args={[3.8, 4, 64]} />
          <meshBasicMaterial
            color="#ff00ff"
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Additional decorative rings */}
        <mesh rotation-x={-Math.PI / 2} position={[0, 0.04, 0]}>
          <ringGeometry args={[3.6, 3.7, 64]} />
          <meshBasicMaterial
            color="#00ffff"
            transparent
            opacity={0.2}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </group>
  );
};

export default Platform;