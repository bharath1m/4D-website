// src/components/Projects/BlockchainProject/index.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BlockchainScene from './BlockchainScene';
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
  StatBox,
  StatGrid
} from './styles';

const BlockchainProject = () => {
  const containerRef = useRef(null);

  return (
    <ProjectContainer ref={containerRef}>
      <BackButton to="/">← Back</BackButton>

      <Section>
        <Content>
          <Title>Blockchain Technology</Title>
          <Description>
            Explore the future of decentralized systems through immersive blockchain visualization.
            Watch real-time block creation and transaction flows in action.
          </Description>
          <CanvasContainer>
            <Canvas camera={{ position: [0, 0, 8] }}>
              <BlockchainScene />
              <OrbitControls />
            </Canvas>
          </CanvasContainer>
        </Content>
      </Section>

      <Section dark>
        <Content>
          <Title>Network Statistics</Title>
          <StatGrid>
            <StatBox>
              <h3>Blocks</h3>
              <span className="number">14,532</span>
              <span className="label">Total Blocks Mined</span>
            </StatBox>
            <StatBox>
              <h3>Transactions</h3>
              <span className="number">1.2M+</span>
              <span className="label">Processed</span>
            </StatBox>
            <StatBox>
              <h3>Nodes</h3>
              <span className="number">256</span>
              <span className="label">Active Nodes</span>
            </StatBox>
          </StatGrid>
        </Content>
      </Section>

      <Section>
        <Content>
          <Title>Core Features</Title>
          <FeatureGrid>
            <FeatureCard>
              <h3>Smart Contracts</h3>
              <p>Self-executing contracts with terms directly written into code.</p>
            </FeatureCard>
            <FeatureCard>
              <h3>Consensus Protocol</h3>
              <p>Advanced proof-of-stake mechanism for network security.</p>
            </FeatureCard>
            <FeatureCard>
              <h3>Cryptography</h3>
              <p>State-of-the-art encryption for secure transactions.</p>
            </FeatureCard>
            <FeatureCard>
              <h3>Decentralization</h3>
              <p>Distributed network architecture for enhanced reliability.</p>
            </FeatureCard>
          </FeatureGrid>
        </Content>
      </Section>
    </ProjectContainer>
  );
};

export default BlockchainProject;