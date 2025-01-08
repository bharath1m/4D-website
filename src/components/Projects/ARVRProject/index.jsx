// src/components/Projects/ARVRProject/index.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ARVRScene from './ARVRScene';
import {
  ProjectContainer,
  Section,
  Content,
  Title,
  Description,
  CanvasContainer,
  BackButton,
  FeatureGrid,
  FeatureCard,
  ExperienceSection,
  DeviceShowcase
} from './styles';

const ARVRProject = () => {
  const containerRef = useRef(null);

  return (
    <ProjectContainer ref={containerRef}>
      <BackButton to="/">← Back</BackButton>

      <Section>
        <Content>
          <Title>AR/VR Experience</Title>
          <Description>
            Step into the future of immersive technology. Experience seamless 
            integration of virtual and augmented reality in a unified platform.
          </Description>
          <CanvasContainer>
            <Canvas camera={{ position: [0, 0, 8] }}>
              <ARVRScene />
              <OrbitControls />
            </Canvas>
          </CanvasContainer>
        </Content>
      </Section>

      <ExperienceSection>
        <Content>
          <Title>Virtual Worlds</Title>
          <DeviceShowcase>
            <div className="device vr">
              <h3>VR Experience</h3>
              <ul>
                <li>6 DOF Tracking</li>
                <li>Haptic Feedback</li>
                <li>120Hz Refresh Rate</li>
                <li>4K per eye</li>
              </ul>
            </div>
            <div className="device ar">
              <h3>AR Features</h3>
              <ul>
                <li>Spatial Mapping</li>
                <li>Object Recognition</li>
                <li>Real-time Tracking</li>
                <li>Environment Analysis</li>
              </ul>
            </div>
          </DeviceShowcase>
        </Content>
      </ExperienceSection>

      <Section>
        <Content>
          <Title>Core Features</Title>
          <FeatureGrid>
            <FeatureCard>
              <h3>Mixed Reality</h3>
              <p>Seamless blend of virtual and physical worlds with real-time interaction.</p>
            </FeatureCard>
            <FeatureCard>
              <h3>Neural Interface</h3>
              <p>Direct brain-computer interface for intuitive control and feedback.</p>
            </FeatureCard>
            <FeatureCard>
              <h3>Holographic Display</h3>
              <p>Advanced volumetric rendering for true 3D visualization.</p>
            </FeatureCard>
            <FeatureCard>
              <h3>Quantum Rendering</h3>
              <p>Next-gen graphics pipeline powered by quantum computing.</p>
            </FeatureCard>
          </FeatureGrid>
        </Content>
      </Section>
    </ProjectContainer>
  );
};

export default ARVRProject;