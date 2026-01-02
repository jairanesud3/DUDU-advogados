import React, { useEffect, useRef, useState } from 'react';
import { RevealProps } from '../types';

export const RevealOnScroll: React.FC<RevealProps> = ({ children, width = "100%", delay = 0, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      if (direction === 'left') return "translateX(-50px)";
      if (direction === 'right') return "translateX(50px)";
      return "translateY(50px)";
    }
    return "translate(0)";
  };

  return (
    <div ref={ref} style={{ width, overflow: 'hidden' }}>
      <div
        style={{
          transform: getTransform(),
          opacity: isVisible ? 1 : 0,
          transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
        }}
      >
        {children}
      </div>
    </div>
  );
};