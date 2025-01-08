// src/components/UI/Navigation.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Navigation = () => {
  const menuItems = [
    'HOME', 'ABOUT', 'EXPLORE', 'RESEARCH', 'DISCOVER', 'UNDERSTAND', 'IMPLEMENT'
  ];

  return (
    <NavContainer>
      <NavList>
        {menuItems.map((item, index) => (
          <NavItem
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <NavLink href={`#${item.toLowerCase()}`}>
              {item}
              <Highlight />
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  z-index: 100;
  background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled(motion.li)`
  position: relative;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 2px;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ff00ff;
  }
`;

const Highlight = styled.span`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  transform: scaleX(0);
  transition: transform 0.3s ease;

  ${NavLink}:hover & {
    transform: scaleX(1);
  }
`;

export default Navigation;