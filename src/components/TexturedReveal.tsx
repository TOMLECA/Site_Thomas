"use client";

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TexturedRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "left" | "right" | "top" | "bottom";
  intensity?: "light" | "medium" | "heavy";
}

const TexturedReveal: React.FC<TexturedRevealProps> = ({ 
  children, 
  delay = 0, 
  direction = "left",
  intensity = "medium" 
}) => {
  // Détermine la position initiale et finale en fonction de la direction
  const getInitialX = () => {
    if (direction === "left") return "-100%";
    if (direction === "right") return "100%";
    return "0%";
  };
  
  const getInitialY = () => {
    if (direction === "top") return "-100%";
    if (direction === "bottom") return "100%";
    return "0%";
  };

  // Choisir la bonne intensité pour le grain
  const getGrainOpacity = () => {
    switch(intensity) {
      case "light": return 0.6;
      case "heavy": return 1;
      default: return 0.8;
    }
  };

  // SVG avancé pour le grain cinématographique
  const grainSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {children}
      </motion.div>
      
      <motion.div 
        className="absolute inset-0 bg-[rgb(var(--background-rgb))] z-10"
        style={{
          backgroundImage: grainSvg,
          backgroundBlendMode: 'overlay',
          opacity: getGrainOpacity()
        }}
        initial={{ 
          x: getInitialX(), 
          y: getInitialY() 
        }}
        whileInView={{ 
          x: direction === "left" ? "100%" : (direction === "right" ? "-100%" : "0%"),
          y: direction === "top" ? "100%" : (direction === "bottom" ? "-100%" : "0%")
        }}
        transition={{ 
          duration: 1.8, 
          ease: [0.25, 0.1, 0.25, 1], 
          delay: delay 
        }}
        viewport={{ once: true, amount: 0.3 }}
      />
    </div>
  );
};

export default TexturedReveal; 