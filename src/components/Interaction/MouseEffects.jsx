// src/components/Interaction/MouseEffects.jsx
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const MouseEffects = () => {
  const cursorRef = useRef();
  const followerRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      // Main cursor
      cursorRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
      
      // Follower cursor with delay
      setTimeout(() => {
        followerRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <Cursor ref={cursorRef} />
      <CursorFollower ref={followerRef} />
    </>
  );
};

const Cursor = styled.div`
  position: fixed;
  width: 8px;
  height: 8px;
  background: #ff00ff;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
`;

const CursorFollower = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  border: 2px solid #00ffff;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
`;

export default MouseEffects;