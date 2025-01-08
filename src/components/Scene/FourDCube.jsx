// src/components/Scene/FourDCube.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MeshTransmissionMaterial } from '@react-three/drei';

const FourDCube = () => {
  const cubeRef = useRef();
  const time = useRef(0);

  useFrame((state) => {
    time.current += 0.01;
    if (cubeRef.current) {
      cubeRef.current.rotation.x = Math.sin(time.current) * 0.5;
      cubeRef.current.rotation.y = Math.cos(time.current) * 0.5;
      cubeRef.current.rotation.z = Math.sin(time.current * 0.5) * 0.3;
    }
  });

  return (
    <group>
      {/* Main glowing cube */}
      <mesh ref={cubeRef} scale={[2, 2, 2]}>
        <boxGeometry args={[1, 1, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          thickness={0.5}
          chromaticAberration={0.5}
          transmission={1}
          metalness={0.1}
          roughness={0}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
          color="#00ffff"
          attenuationDistance={0.5}
          attenuationColor="#ff00ff"
          emissive="#4000ff"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Outer wireframe */}
      <mesh scale={[2.1, 2.1, 2.1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  );
};

export default FourDCube;