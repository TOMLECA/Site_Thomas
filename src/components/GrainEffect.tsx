"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const GrainEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ajuster la taille du canvas à la fenêtre
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Paramètres de l'animation
    let animationFrameId: number;
    let frame = 0;

    // Fonction pour créer le grain
    const generateNoise = (ctx: CanvasRenderingContext2D) => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      
      // Intensité du grain (valeurs plus basses = grain plus subtil)
      const intensity = 15;
      
      // Générer des pixels de grain aléatoires
      for (let i = 0; i < data.length; i += 4) {
        // Valeur aléatoire pour le grain
        const noise = Math.floor(Math.random() * intensity);
        
        // Appliquer la même valeur aux canaux RGB pour un grain noir et blanc
        data[i] = noise;       // R
        data[i + 1] = noise;   // G
        data[i + 2] = noise;   // B
        data[i + 3] = 14;      // Alpha (opacité) - subtil
      }
      
      ctx.putImageData(imageData, 0, 0);
    };

    // Boucle d'animation
    const animate = () => {
      frame++;
      
      // Générer un nouveau grain à chaque frame
      if (ctx) {
        // Effacer le canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Générer un nouveau grain
        generateNoise(ctx);
      }
      
      // Boucle d'animation
      animationFrameId = requestAnimationFrame(animate);
    };

    // Démarrer l'animation
    animate();

    // Nettoyer lors du démontage du composant
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100] mix-blend-overlay opacity-25"
      style={{ 
        backgroundColor: 'transparent',
        willChange: 'transform'
      }}
    />
  );
};

export default GrainEffect; 