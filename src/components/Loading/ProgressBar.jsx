// src/components/Loading/ProgressBar.jsx
import React from 'react';
import styled from 'styled-components';

const ProgressBar = ({ progress }) => {
  return (
    <Container>
      <Progress style={{ width: `${progress}%` }} />
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 10px;
  background: #333;
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  transition: width 0.3s ease;
`;

export default ProgressBar;