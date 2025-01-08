// src/components/Sections/ProjectsSection.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Digital Experience',
    description: 'Immersive 3D interactions and animations',
    color: '#ff00ff'
  },
  {
    id: 2,
    title: 'Virtual Reality',
    description: 'Next-generation VR experiences',
    color: '#00ffff'
  },
  {
    id: 3,
    title: 'Interactive Art',
    description: 'Blending technology with artistic expression',
    color: '#ff0066'
  }
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <Container>
      <Content>
        <Title
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </Title>
        
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              onClick={() => setActiveProject(project)}
            >
              <ProjectBackground style={{ background: project.color }} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>

        <AnimatePresence>
          {activeProject && (
            <ProjectModal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
            >
              <ModalContent
                onClick={e => e.stopPropagation()}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <ModalTitle>{activeProject.title}</ModalTitle>
                <ModalDescription>{activeProject.description}</ModalDescription>
                <CloseButton onClick={() => setActiveProject(null)}>×</CloseButton>
              </ModalContent>
            </ProjectModal>
          )}
        </AnimatePresence>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  min-height: 100vh;
  padding: 5rem 0;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3.5rem);
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// ... continuing in next part due to length limit ...