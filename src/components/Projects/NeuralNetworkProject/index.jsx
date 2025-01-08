// src/components/Projects/NeuralNetworkProject/index.jsx
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import NeuralScene from './NeuralScene';
import {
  ProjectContainer,
  Section,
  Content,
  Title,
  Description,
  CanvasContainer,
  BackButton
} from './styles';

const NeuralNetworkProject = () => {
  const containerRef = useRef(null);

  return (
    <ProjectContainer ref={containerRef}>
      <BackButton to="/">← Back</BackButton>

      <Section>
        <Content>
          <Title>Neural Network Visualization</Title>
          <Description>
            Explore the intricate architecture of neural networks through interactive
            4D visualization. Understand how deep learning models process and transform data.
          </Description>
          <CanvasContainer>
            <Canvas camera={{ position: [0, 0, 5] }}>
              <NeuralScene />
              <OrbitControls />
            </Canvas>
          </CanvasContainer>
        </Content>
      </Section>

      <Section>
        <Content>
          <Title>Network Architecture</Title>
          <Description>
            Our neural network implements state-of-the-art architectures including
            transformers, convolutional layers, and attention mechanisms.
          </Description>
        </Content>
      </Section>
    </ProjectContainer>
  );
};

export default NeuralNetworkProject;