// src/hooks/useScrollAnimation.js
import { useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const [scrollData, setScrollData] = useState({
    progress: 0,
    velocity: 0,
    direction: 'down'
  });

  useEffect(() => {
    let lastScroll = window.pageYOffset;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.pageYOffset;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          
          setScrollData({
            progress: currentScroll / maxScroll,
            velocity: Math.abs(currentScroll - lastScroll),
            direction: currentScroll > lastScroll ? 'down' : 'up'
          });

          lastScroll = currentScroll;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollData;
};