// src/components/UI/ProjectCards.jsx
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProjectsContainer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
  z-index: 10;
  width: 90%;
  max-width: 1200px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 20px;

  @media (max-width: 1200px) {
    gap: 10px;
  }

  @media (max-width: 768px) {
    bottom: 2%;
  }
`;

const Card = styled.div`
  width: 260px;
  background: rgba(26, 11, 46, 0.25);
  border: 1px solid rgba(255, 0, 255, 0.3);
  border-radius: 10px;
  padding: 15px;
  color: white;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 0, 255, 0.8);
    box-shadow: 0 0 20px rgba(255, 0, 255, 0.2);
    background: rgba(26, 11, 46, 0.35);
  }

  @media (max-width: 1200px) {
    width: 220px;
    padding: 12px;
  }

  @media (max-width: 768px) {
    width: calc(50% - 10px);
    min-width: 160px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const Title = styled.h3`
  color: #ff00ff;
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  font-weight: 500;
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.85rem;
  line-height: 1.4;
  margin-bottom: 12px;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
`;

const ViewButton = styled.button`
  background: linear-gradient(45deg, rgba(255, 0, 255, 0.5) 0%, rgba(0, 255, 255, 0.5) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  color: white;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
  
  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(255, 0, 255, 0.3);
    background: linear-gradient(45deg, rgba(255, 0, 255, 0.7) 0%, rgba(0, 255, 255, 0.7) 100%);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 5px 14px;
  }
`;

const ProjectCards = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Neural Networks",
      description: "Advanced AI models with deep learning capabilities for complex pattern recognition.",
      path: "/projects/neural-network"
    },
    {
      id: 2,
      title: "Quantum Computing",
      description: "Next-gen quantum algorithms and simulations for breakthrough computations.",
      path: "/projects/quantum-computing"
    },
    {
      id: 3,
      title: "Blockchain Tech",
      description: "Decentralized solutions with smart contracts and secure transactions.",
      path: "/projects/blockchain"
    },
    {
      id: 4,
      title: "AR/VR Systems",
      description: "Immersive experiences with cutting-edge augmented and virtual reality.",
      path: "/projects/ar-vr"
    }
  ];

  const handleViewProject = (path) => {
    navigate(path);
  };

  return (
    <ProjectsContainer>
      {projects.map((project) => (
        <Card key={project.id}>
          <Title>{project.title}</Title>
          <Description>{project.description}</Description>
          <ViewButton onClick={() => handleViewProject(project.path)}>
            View Project
          </ViewButton>
        </Card>
      ))}
    </ProjectsContainer>
  );
};

export default ProjectCards;