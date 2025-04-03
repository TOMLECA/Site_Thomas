"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import TexturedReveal from './TexturedReveal';
import YouTube from 'react-youtube';

interface HeroProps {
  backgroundImage: string;
  youtubeVideoId?: string;
}

const typewriterVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 2,
      ease: "easeInOut"
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8 + (i * 0.05),
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const Hero: React.FC<HeroProps> = ({ backgroundImage, youtubeVideoId }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  
  // Effet de grain particulier pour le Hero (plus prononcé)
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;
    
    // Ajouter un léger parallaxe sur le scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
        heroElement.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const title = "THOMAS MACHARD";
  
  // Options pour la vidéo YouTube
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
      loop: 1,
      playlist: youtubeVideoId, // Nécessaire pour la lecture en boucle
      vq: 'hd1080', // Force la qualité HD 1080p
      quality: 'hd1080', // Force la qualité HD 1080p
      hd: 1, // Force la lecture en HD
    },
  };
  
  // Gestion des événements de la vidéo YouTube
  const onReady = (event: any) => {
    // Lire la vidéo
    event.target.playVideo();
    setVideoReady(true);
  };
  
  const onEnd = (event: any) => {
    // Rejouer la vidéo lorsqu'elle se termine
    event.target.playVideo();
  };

  return (
    <section 
      id="accueil" 
      ref={heroRef}
      className="hero-section relative overflow-hidden" 
      style={!youtubeVideoId ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {youtubeVideoId && (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div 
            className="youtube-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: videoReady ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <YouTube
              videoId={youtubeVideoId}
              opts={opts}
              onReady={onReady}
              onEnd={onEnd}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130%] h-auto"
              iframeClassName="w-full h-full"
            />
          </motion.div>
        </div>
      )}
      
      <TexturedReveal direction="top" delay={0.2} intensity="heavy">
        <div className="grain-overlay hero-grain"></div>
      </TexturedReveal>
      
      <motion.div 
        className="hero-content text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <TexturedReveal>
          <div className="overflow-hidden">
            <h1 className="britanica-title text-5xl md:text-7xl mb-8 tracking-wider flex justify-center">
              {title.split("").map((char, i) => (
                <motion.span
                  key={`char-${i}`}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className={char === " " ? "mx-2" : ""}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </div>
          
          <motion.div
            className="h-[3px] w-20 bg-accent-1 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </TexturedReveal>
        
        <TexturedReveal direction="bottom" delay={0.5}>
          <motion.p 
            className="overflow-hidden relative whitespace-nowrap flex justify-center"
            variants={typewriterVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="vatik-title text-xl md:text-2xl tracking-[0.3em] text-accent-1">VIDÉASTE & INFOGRAPHISTE</span>
          </motion.p>
        </TexturedReveal>
      </motion.div>
      
      <TexturedReveal direction="bottom" delay={1}>
        <motion.div 
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 2.3 }}
        >
          <a 
            href="#realisations"
            className="w-10 h-14 border border-white/40 rounded-full flex items-center justify-center hover:border-accent-1 transition-colors duration-300"
          >
            <motion.div
              className="w-1.5 h-3 bg-accent-1 rounded-full"
              animate={{ 
                y: [0, 8, 0],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </a>
        </motion.div>
      </TexturedReveal>
      
      {/* Overlay de vignette cinématographique - plus forte pour la vidéo */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{
        background: 'radial-gradient(circle, transparent 20%, rgba(0, 0, 0, 0.6) 100%)',
        mixBlendMode: 'overlay'
      }}></div>
      
      {/* Overlay supplémentaire pour assombrir la vidéo */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-[7]"></div>
      
      {/* Lignes de scan subtiles */}
      <motion.div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 8 }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="w-full h-px bg-white/10"
            style={{
              position: 'absolute',
              top: `${8 + (i * 8)}%`,
              left: 0
            }}
            animate={{
              opacity: [0.1, 0.18, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Hero; 