"use client";

import React from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

interface VideasteProps {
  image: string;
}

const Videaste: React.FC<VideasteProps> = ({ image }) => {
  return (
    <section id="videaste" className="section bg-blue-600 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <ScrollReveal width="100%">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Thomas Machard, <span className="text-black">vidéaste</span></h2>
          </ScrollReveal>
          
          <ScrollReveal width="100%" delay={0.2}>
            <p className="mb-4">
              Passionné par l'image et le récit visuel, je m'efforce de capturer l'essence de chaque projet. 
              Mon approche créative combine technique et sensibilité pour donner vie à vos idées.
            </p>
          </ScrollReveal>
          
          <ScrollReveal width="100%" delay={0.3}>
            <p className="mb-4">
              Après plusieurs années d'expérience dans le domaine audiovisuel, j'ai développé 
              une expertise qui me permet de m'adapter à différents contextes et défis créatifs.
            </p>
          </ScrollReveal>
          
          <ScrollReveal width="100%" delay={0.4}>
            <p className="mb-4">
              Basé en France mais disponible pour des projets à l'international, 
              je mets mon savoir-faire au service de votre vision, qu'il s'agisse d'un film d'entreprise, 
              d'un documentaire ou d'un projet artistique personnel.
            </p>
          </ScrollReveal>
          
          <ScrollReveal width="100%" delay={0.5}>
            <p className="mb-6">
              Mon objectif est de transformer chaque idée en une expérience visuelle marquante et authentique.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.6}>
            <motion.a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-white text-blue-600 hover:bg-opacity-90 transition-all rounded"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </ScrollReveal>
        </div>
        
        <ScrollReveal direction="right" delay={0.2} className="order-1 md:order-2 flex justify-center">
          <motion.div 
            className="relative w-full max-w-md h-[500px]"
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <Image 
              src={image} 
              alt="Thomas Machard, vidéaste"
              fill
              className="object-cover rounded-md"
            />
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Videaste; 