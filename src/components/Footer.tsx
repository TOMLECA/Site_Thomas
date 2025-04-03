"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaLinkedinIn, FaVimeoV } from 'react-icons/fa';
import TexturedReveal from './TexturedReveal';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaInstagram />, url: 'https://instagram.com' },
    { icon: <FaTwitter />, url: 'https://twitter.com' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
    { icon: <FaVimeoV />, url: 'https://vimeo.com' },
  ];
  
  return (
    <footer className="py-12 bg-[rgb(var(--background-rgb))]">
      <div className="cinematic-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <TexturedReveal direction="bottom" delay={0}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-normal mb-4 tracking-wide">THOMAS MACHARD</h3>
              <div className="h-px w-12 bg-accent-1 mb-4"></div>
              <p className="opacity-70 text-sm">
                Vidéaste & infographiste 3D passionné par la narration visuelle.
              </p>
            </motion.div>
          </TexturedReveal>
          
          <TexturedReveal direction="bottom" delay={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-normal mb-4 tracking-wide">CONTACT</h3>
              <div className="h-px w-12 bg-accent-1 mb-4"></div>
              <p className="opacity-70 text-sm mb-2">contact@thomasmachard.com</p>
              <p className="opacity-70 text-sm">+33 6 XX XX XX XX</p>
            </motion.div>
          </TexturedReveal>
          
          <TexturedReveal direction="bottom" delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-normal mb-4 tracking-wide">LIENS</h3>
              <div className="h-px w-12 bg-accent-1 mb-4"></div>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-accent-1 transition-all">ACCUEIL</a></li>
                <li><a href="#about" className="opacity-70 hover:opacity-100 hover:text-accent-1 transition-all">À PROPOS</a></li>
                <li><a href="#projects" className="opacity-70 hover:opacity-100 hover:text-accent-1 transition-all">PROJETS</a></li>
                <li><a href="#contact" className="opacity-70 hover:opacity-100 hover:text-accent-1 transition-all">CONTACT</a></li>
              </ul>
            </motion.div>
          </TexturedReveal>
          
          <TexturedReveal direction="bottom" delay={0.3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-normal mb-4 tracking-wide">RÉSEAUX</h3>
              <div className="h-px w-12 bg-accent-1 mb-4"></div>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 hover:text-accent-1 transition-all text-lg"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </TexturedReveal>
        </div>
        
        <TexturedReveal direction="left">
          <motion.div
            className="text-center pt-8 border-t border-[rgba(var(--foreground-rgb),0.1)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-xs opacity-50">
              &copy; {currentYear} Thomas Machard. Tous droits réservés.
            </p>
          </motion.div>
        </TexturedReveal>
      </div>
    </footer>
  );
};

export default Footer; 