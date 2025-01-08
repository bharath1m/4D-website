// src/components/Projects/ARVRProject/styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectContainer = styled.div`
  background: linear-gradient(to bottom, #0f172a, #1e1b4b);
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

  @media (max-width: 768px) {
    padding: 60px 15px;
  }
`;

export const ExperienceSection = styled(Section)`
  background: rgba(79, 70, 229, 0.1);
  backdrop-filter: blur(10px);
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  background: linear-gradient(45deg, #22d3ee, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #94a3b8;
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
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.1);
  background: rgba(15, 23, 42, 0.5);
`;

export const BackButton = styled(Link)`
  position: fixed;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  background: rgba(148, 163, 184, 0.1);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  z-index: 100;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(148, 163, 184, 0.2);
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
  background: rgba(148, 163, 184, 0.1);
  border-radius: 15px;
  padding: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(148, 163, 184, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #22d3ee;
  }

  h3 {
    color: #22d3ee;
    margin-bottom: 15px;
    font-size: 1.3rem;
  }

  p {
    color: #94a3b8;
    font-size: 1rem;
    line-height: 1.6;
  }
`;

export const DeviceShowcase = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .device {
    background: rgba(148, 163, 184, 0.1);
    border-radius: 15px;
    padding: 30px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(148, 163, 184, 0.1);

    h3 {
      color: #22d3ee;
      margin-bottom: 20px;
      font-size: 1.5rem;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        color: #94a3b8;
        margin-bottom: 10px;
        font-size: 1rem;
        display: flex;
        align-items: center;

        &:before {
          content: "→";
          color: #a855f7;
          margin-right: 10px;
        }
      }
    }

    &.vr {
      border-color: #22d3ee;
    }

    &.ar {
      border-color: #a855f7;
    }
  }
`;