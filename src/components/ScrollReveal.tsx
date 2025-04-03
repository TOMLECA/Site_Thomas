"use client";

import React, { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0,
  direction = 'up',
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const directionVariants = {
    up: { opacity: 0, y: 50 },
    down: { opacity: 0, y: -50 },
    left: { opacity: 0, x: 50 },
    right: { opacity: 0, x: -50 },
    none: { opacity: 0 }
  };

  const initialAnimation = direction === 'none' 
    ? { opacity: 0 } 
    : directionVariants[direction];
  
  return (
    <div ref={ref} style={{ width, overflow: 'hidden' }} className={className}>
      <motion.div
        initial={initialAnimation}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : initialAnimation}
        transition={{ duration: 0.6, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal; 