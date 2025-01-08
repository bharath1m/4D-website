// src/components/UI/Buttons.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GlowButton = ({ children, onClick }) => {
  return (
    <ButtonContainer
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <ButtonContent>{children}</ButtonContent>
      <ButtonGlow />
    </ButtonContainer>
  );
};

const ButtonContainer = styled(motion.button)`
  position: relative;
  padding: 0.8rem 2rem;
  border: none;
  background: transparent;
  cursor: pointer;
  overflow: hidden;
  border-radius: 30px;
`;

const ButtonContent = styled.span`
  position: relative;
  z-index: 1;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const ButtonGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  opacity: 0.8;
  filter: blur(8px);
  transition: opacity 0.3s ease;

  ${ButtonContainer}:hover & {
    opacity: 1;
  }
`;

// Add interactive elements for the scene