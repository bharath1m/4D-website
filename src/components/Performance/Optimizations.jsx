// src/components/Performance/Optimizations.jsx
import React, { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';

const Optimizations = () => {
  const { gl } = useThree();
  const [isMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Optimize renderer
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    if (isMobile) {
      gl.setSize(window.innerWidth, window.innerHeight);
      gl.shadowMap.enabled = false;
    } else {
      gl.setSize(window.innerWidth, window.innerHeight);
      gl.shadowMap.enabled = true;
      gl.shadowMap.type = THREE.PCFSoftShadowMap;
    }
  }, [gl, isMobile]);

  return null;
};

export default Optimizations;