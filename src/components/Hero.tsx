"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Vidéo de fond */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/images/backgrounds/background-video-poster.jpg"
        >
          <source src="/videos/background-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-[90vw] sm:max-w-none">
        <motion.h1 
          className="text-[2.5rem] sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-wider leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          THOMAS MACHARD
        </motion.h1>
        <motion.div 
          className="h-px w-16 bg-accent-1 mx-auto mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <motion.p 
          className="text-base sm:text-xl md:text-2xl text-white/90 font-light tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Vidéaste & Infographiste 3D
        </motion.p>
      </div>

      {/* Effet de vignette */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
      </div>

      {/* Effet de grain */}
      <div className="absolute inset-0 opacity-20 z-30">
        <div className="absolute inset-0 bg-noise"></div>
      </div>
    </section>
  );
};

export default Hero; 