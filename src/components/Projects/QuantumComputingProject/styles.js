// src/components/Projects/QuantumComputingProject/styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectContainer = styled.div`
  background: linear-gradient(to bottom, #ffffff, #f0f0f0);
  min-height: 100vh;
  overflow-x: hidden;
`;

export const Section = styled.section`
  min-height: 100vh;
  padding: 80px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 60px 15px;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  color: #1a1a1a;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CanvasContainer = styled.div`
  height: 60vh;
  width: 100%;
  margin: 2rem 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0));
  border-radius: 20px;
`;

export const BackButton = styled(Link)`
  position: fixed;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  z-index: 100;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 1);
    transform: scale(1.05);
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

export const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 0, 255, 0.4);
  }

  h3 {
    color: #00ffff;
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  p {
    color: #333;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;