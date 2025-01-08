// src/components/Scene/GlowingCircle.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GlowingCircle = () => {
  const circleRef = useRef();

  // Create circle geometry with multiple rings
  const createCircleGeometry = () => {
    const geometry = new THREE.RingGeometry(2, 2.1, 64);
    return geometry;
  };

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (circleRef.current) {
      circleRef.current.rotation.z = t * 0.2;
    }
  });

  return (
    <group position={[0, 4, 0]}>
      {/* Main glowing ring */}
      <mesh ref={circleRef} rotation-x={-Math.PI / 2}>
        <ringGeometry args={[2, 2.1, 64]} />
        <meshBasicMaterial color="#ff00ff" transparent opacity={0.8} />
      </mesh>

      {/* Additional rings for glow effect */}
      <mesh rotation-x={-Math.PI / 2}>
        <ringGeometry args={[1.9, 2.2, 64]} />
        <meshBasicMaterial color="#ff00ff" transparent opacity={0.3} />
      </mesh>

      <mesh rotation-x={-Math.PI / 2}>
        <ringGeometry args={[1.8, 2.3, 64]} />
        <meshBasicMaterial color="#00ffff" transparent opacity={0.2} />
      </mesh>

      {/* Light beams */}
      <LightBeams />
    </group>
  );
};

// Light beams component
const LightBeams = () => {
  const beamsRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (beamsRef.current) {
      beamsRef.current.children.forEach((beam, i) => {
        beam.position.y = Math.sin(t + i) * 0.2 - 2;
        beam.material.opacity = (Math.sin(t * 2 + i) + 1) * 0.3;
      });
    }
  });

  return (
    <group ref={beamsRef}>
      {[...Array(12)].map((_, i) => (
        <mesh
          key={i}
          position={[0, -2, 0]}
          rotation={[0, (i / 12) * Math.PI * 2, 0]}
        >
          <planeGeometry args={[0.1, 4]} />
          <meshBasicMaterial
            color="#ff00ff"
            transparent
            opacity={0.5}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
};

export default GlowingCircle;