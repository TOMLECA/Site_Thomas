"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  // Variantes pour l'animation du menu
  const menuVariants = {
    closed: { 
      x: "-100%", 
      transition: { 
        type: "tween", 
        ease: [0.25, 0.1, 0.25, 1], 
        duration: 0.5,
        staggerChildren: 0.05,
        staggerDirection: -1
      } 
    },
    open: { 
      x: 0, 
      transition: { 
        type: "tween", 
        ease: [0.25, 0.1, 0.25, 1], 
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };
  
  // Variantes pour les éléments du menu
  const menuItemVariants = {
    closed: { 
      x: -20, 
      opacity: 0,
      transition: { 
        type: "tween", 
        ease: "easeInOut" 
      }
    },
    open: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "tween", 
        ease: "easeOut" 
      }
    }
  };
  
  // Variantes pour l'overlay
  const overlayVariants = {
    closed: { 
      opacity: 0,
      transition: { 
        duration: 0.4,
        ease: "easeInOut"
      } 
    },
    open: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    }
  };

  // Variantes pour l'animation du bouton
  const buttonVariants = {
    tap: { 
      scale: 0.85, 
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "0 0 10px rgba(255,255,255,0.5)" 
    }
  };

  return (
    <>
      {/* Bouton de menu fixe qui reste au-dessus de tout */}
      <motion.button
        className="fixed top-4 left-6 md:left-12 text-white z-[9999] p-3 cursor-pointer pointer-events-auto bg-black/60 rounded-md backdrop-blur-sm shadow-lg border border-white/10"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
        whileTap={buttonVariants.tap}
        animate={menuOpen ? 
          { rotate: 90, x: [0, -5, 5, -3, 3, 0] } : 
          { rotate: 0 }
        }
        transition={{ 
          duration: 0.3,
          x: menuOpen ? { duration: 0.5, ease: "easeOut" } : {}
        }}
      >
        {menuOpen ? (
          <>
            <div className="w-6 h-[3px] bg-white mb-1.5 transform rotate-45 translate-y-[4px]"></div>
            <div className="w-6 h-[3px] bg-white mb-1.5 opacity-0"></div>
            <div className="w-6 h-[3px] bg-white transform -rotate-45 -translate-y-[4px]"></div>
          </>
        ) : (
          <>
            <div className="w-6 h-[3px] bg-white mb-1.5"></div>
            <div className="w-6 h-[3px] bg-white mb-1.5"></div>
            <div className="w-6 h-[3px] bg-white"></div>
          </>
        )}
      </motion.button>

      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 py-0 bg-transparent pointer-events-none`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Logo centré par rapport à la page */}
        <AnimatePresence>
          {!scrolled && (
            <div className="flex justify-center items-center h-full w-full -mt-12">
              <motion.div 
                className="pointer-events-auto text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7 }}
              >
                <a href="#accueil" className="inline-block">
                  <Image 
                    src="/images/logo/Logo_TM.svg" 
                    alt="Logo Thomas Machard" 
                    width={200} 
                    height={200} 
                    className="w-[20vw] h-auto"
                    priority
                  />
                </a>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Vignette overlay */}
      <div className="vignette-overlay"></div>
      
      {/* Scan lines */}
      <div className="scan-lines"></div>

      {/* Menu latéral */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay semi-transparent qui couvre tout l'écran */}
            <motion.div 
              className="fixed inset-0 bg-black/40 z-40"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              onClick={toggleMenu}
              style={{ 
                willChange: "opacity",
                backfaceVisibility: "hidden"
              }}
            />
            
            {/* Panneau de menu qui s'ouvre uniquement à gauche */}
            <motion.div 
              className="fixed top-0 left-0 bottom-0 w-64 md:w-80 bg-black z-50 flex flex-col pt-24"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              style={{ 
                willChange: "transform",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                perspective: "1000px",
                WebkitPerspective: "1000px"
              }}
            >
              <div className="flex flex-col items-start pl-12 space-y-6">
                <motion.a 
                  href="#accueil" 
                  className="menu-item text-2xl tracking-wider hover:text-accent-1 transition-all"
                  onClick={toggleMenu}
                  whileHover={{ x: 5 }}
                  variants={menuItemVariants}
                >
                  ACCUEIL
                </motion.a>
                <motion.a 
                  href="#videos" 
                  className="menu-item text-2xl tracking-wider hover:text-accent-1 transition-all"
                  onClick={toggleMenu}
                  whileHover={{ x: 5 }}
                  variants={menuItemVariants}
                >
                  VIDÉOS
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="menu-item text-2xl tracking-wider hover:text-accent-1 transition-all"
                  onClick={toggleMenu}
                  whileHover={{ x: 5 }}
                  variants={menuItemVariants}
                >
                  CONTACT
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation; 