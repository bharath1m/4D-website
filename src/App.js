// src/App.js
import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScene from './components/Scene/MainScene';
import LoadingScreen from './components/Loading/LoadingScreen';
import ProjectCards from './components/UI/ProjectCards';
import NeuralNetworkProject from './components/Projects/NeuralNetworkProject';
import QuantumComputingProject from './components/Projects/QuantumComputingProject';
import styled from 'styled-components';
import './styles/global.css';
import BlockchainProject from './components/Projects/BlockchainProject';
import ARVRProject from './components/Projects/ARVRProject';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: transparent;
`;

const SceneWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const HomePage = ({ isLoading, setIsLoading }) => (
  <Container>
    {isLoading ? (
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
    ) : (
      <Suspense fallback={null}>
        <SceneWrapper>
          <MainScene />
        </SceneWrapper>
        <ProjectCards />
      </Suspense>
    )}
  </Container>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<HomePage isLoading={isLoading} setIsLoading={setIsLoading} />} 
        />
        <Route 
          path="/projects/neural-network" 
          element={<NeuralNetworkProject />} 
        />
        <Route 
          path="/projects/quantum-computing" 
          element={<QuantumComputingProject />} 
        />
        <Route 
          path="/projects/blockchain" 
          element={<BlockchainProject />} 
        />
        <Route 
          path="/projects/ar-vr" 
          element={<ARVRProject />} 
        />
      </Routes>
    </Router>
  );
}

export default App;