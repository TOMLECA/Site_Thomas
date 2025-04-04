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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">À propos</h3>
            <p className="text-sm sm:text-base text-white/80">
              Vidéaste & infographiste 3D passionné par la narration visuelle.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm sm:text-base text-white/80">thomas.machardpro@gmail.com</p>
              <p className="text-sm sm:text-base text-white/80">+33 7 82 03 27 84</p>
              <p className="text-sm sm:text-base text-white/80">Rennes, France</p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-white/10">
          <p className="text-sm sm:text-base text-white/60 text-center">
            © {new Date().getFullYear()} Thomas Machard. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 