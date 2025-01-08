// src/components/Projects/ARVRProject/ARVRScene.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ARVRScene = () => {
  const groupRef = useRef();
  const holoRef = useRef();

  // Create floating hologram effect
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Rotate main group
    groupRef.current.rotation.y = t * 0.1;

    // Animate hologram
    if (holoRef.current) {
      holoRef.current.position.y = Math.sin(t) * 0.2;
      holoRef.current.rotation.y = t * 0.5;
    }

    // Animate child objects
    groupRef.current.children.forEach((child, i) => {
      if (child.type === 'Group') {
        child.position.y += Math.sin(t + i) * 0.002;
        child.rotation.z = Math.sin(t * 0.5 + i) * 0.1;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#7c3aed" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />

      {/* Central Hologram */}
      <group ref={holoRef}>
        {/* Core sphere */}
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#4f46e5"
            metalness={0.9}
            roughness={0.1}
            emissive="#4f46e5"
            emissiveIntensity={0.5}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Holographic rings */}
        {[...Array(3)].map((_, i) => (
          <mesh key={i} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <torusGeometry args={[1.5 + i * 0.5, 0.02, 16, 100]} />
            <meshBasicMaterial
              color="#22d3ee"
              transparent
              opacity={0.3 - i * 0.1}
            />
          </mesh>
        ))}

        {/* Data streams */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          return (
            <group key={i} rotation={[0, angle, 0]}>
              <mesh position={[2, 0, 0]}>
                <boxGeometry args={[0.1, 0.1, 0.1]} />
                <meshBasicMaterial color="#a855f7" />
              </mesh>
              <line>
                <bufferGeometry
                  attach="geometry"
                  {...new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(0, 0, 0),
                    new THREE.Vector3(2, 0, 0)
                  ])}
                />
                <lineBasicMaterial color="#a855f7" transparent opacity={0.5} />
              </line>
            </group>
          );
        })}
      </group>

      {/* AR Markers */}
      {[...Array(4)].map((_, i) => {
        const angle = (i / 4) * Math.PI * 2;
        return (
          <group
            key={i}
            position={[
              Math.cos(angle) * 3,
              0,
              Math.sin(angle) * 3
            ]}
          >
            <mesh>
              <boxGeometry args={[0.5, 0.5, 0.5]} />
              <meshStandardMaterial
                color="#0ea5e9"
                metalness={0.8}
                roughness={0.2}
                emissive="#0ea5e9"
                emissiveIntensity={0.3}
              />
            </mesh>
            {/* AR scan lines */}
            <mesh position={[0, 1, 0]}>
              <planeGeometry args={[0.8, 2]} />
              <meshBasicMaterial
                color="#22d3ee"
                transparent
                opacity={0.2}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        );
      })}

      {/* VR Controllers */}
      {[...Array(2)].map((_, i) => (
        <group
          key={i}
          position={[i === 0 ? -1.5 : 1.5, -1, -1]}
          rotation={[0.5, i === 0 ? 0.5 : -0.5, 0]}
        >
          <mesh>
            <cylinderGeometry args={[0.05, 0.05, 0.3, 8]} />
            <meshStandardMaterial
              color="#8b5cf6"
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
          {/* Controller buttons */}
          <mesh position={[0, 0.1, 0.1]}>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshBasicMaterial color="#22d3ee" />
          </mesh>
        </group>
      ))}

      {/* Particle effects */}
      {[...Array(100)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
            Math.random() * 10 - 5
          ]}
          scale={0.02}
        >
          <sphereGeometry />
          <meshBasicMaterial
            color={i % 2 ? "#22d3ee" : "#a855f7"}
            transparent
            opacity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};

export default ARVRScene;