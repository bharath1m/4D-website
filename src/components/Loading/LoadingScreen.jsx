// src/components/Loading/LoadingScreen.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          onLoadingComplete();
          return 100;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <Container>
      <Content>
        <Title>Loading...</Title>
        <ProgressBar progress={progress} />
        <Percentage>{progress}%</Percentage>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Percentage = styled.p`
  color: #fff;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

export default LoadingScreen;