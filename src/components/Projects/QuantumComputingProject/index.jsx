// src/components/Projects/QuantumComputingProject/index.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import QuantumScene from './QuantumScene';
import {
  ProjectContainer,
  Section,
  Content,
  Title,
  Description,
  CanvasContainer,
  BackButton,
  FeatureGrid,
  FeatureCard
} from './styles';

const QuantumComputingProject = () => {
  const containerRef = useRef(null);

  return (
    <ProjectContainer ref={containerRef}>
      <BackButton to="/">← Back</BackButton>

      <Section>
        <Content>
          <Title>Quantum Computing Simulation</Title>
          <Description>
            Experience the power of quantum computing through interactive visualizations.
            Explore quantum bits, gates, and quantum circuits in action.
          </Description>
          <CanvasContainer>
            <Canvas camera={{ position: [0, 0, 5] }}>
              <QuantumScene />
              <OrbitControls />
            </Canvas>
          </CanvasContainer>
        </Content>
      </Section>

      <Section>
        <Content>
          <Title>Quantum Features</Title>
          <FeatureGrid>
            <FeatureCard>
              <h3>Quantum Gates</h3>
              <p>Implementation of fundamental quantum gates including Hadamard, CNOT, and Phase gates.</p>
            </FeatureCard>
            <FeatureCard>
              <h3>Qubit States</h3>
              <p>Visualization of quantum superposition and entanglement states.</p>
            </FeatureCard>
            <FeatureCard>
              <h3>Quantum Circuits</h3>
              <p>Design and simulate quantum circuits with multiple qubits.</p>
            </FeatureCard>
            <FeatureCard>
              <h3>Quantum Algorithms</h3>
              <p>Implementation of Shor's algorithm and Grover's search.</p>
            </FeatureCard>
          </FeatureGrid>
        </Content>
      </Section>
    </ProjectContainer>
  );
};

export default QuantumComputingProject;