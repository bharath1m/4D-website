// src/components/Projects/BlockchainProject/styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectContainer = styled.div`
  background: #000000;
  min-height: 100vh;
  overflow-x: hidden;
  color: #ffffff;
`;

export const Section = styled.section`
  min-height: 100vh;
  padding: 80px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${props => props.dark ? '#000000' : '#111111'};

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
  color: #ffffff;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #cccccc;
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
  height: 70vh;
  width: 100%;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

export const BackButton = styled(Link)`
  position: fixed;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  z-index: 100;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
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
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.3);
  }

  h3 {
    color: #ffffff;
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  p {
    color: #cccccc;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StatBox = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #ffffff;
    font-size: 1.2rem;
    margin-bottom: 15px;
  }

  .number {
    display: block;
    font-size: 2.5rem;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 10px;
  }

  .label {
    color: #cccccc;
    font-size: 0.9rem;
  }
`;