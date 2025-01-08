// src/components/Scene/MainScene.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import RubiksCube from './RubiksCube';
import Platform from './Platform';
import GlowingCircle from './GlowingCircle';
import Background from './Background';
import FloatingObjects from './FloatingObjects';
import PostProcessing from '../Effects/PostProcessing';

const MainScene = () => {
  return (
    <Canvas
      camera={{ position: [8, 8, 8], fov: 60 }}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding
      }}
    >
      <Suspense fallback={null}>
        <Background />
        <RubiksCube />
        <GlowingCircle />
        <Platform />
        <FloatingObjects />

        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <spotLight
          position={[0, 10, 0]}
          angle={0.5}
          penumbra={1}
          intensity={2}
          color="#ff00ff"
        />
        <spotLight
          position={[8, 2, 8]}
          angle={0.5}
          penumbra={1}
          intensity={1.5}
          color="#ff00ff"
        />
        <spotLight
          position={[-8, 2, -8]}
          angle={0.5}
          penumbra={1}
          intensity={1.5}
          color="#00ffff"
        />

        <PostProcessing />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default MainScene;