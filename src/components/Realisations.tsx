"use client";

import React from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TexturedReveal from './TexturedReveal';

const Realisations: React.FC = () => {
  return (
    <section id="realisations" className="section bg-[rgb(var(--background-rgb))]">
      <div className="cinematic-container">
        <TexturedReveal direction="top">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-normal tracking-widest mb-3 text-center">L'ART DE LA <span className="text-accent-1">NARRATION</span></h2>
            <p className="max-w-2xl mx-auto text-center opacity-80 italic">
              Une image est une histoire silencieuse qui parle au cœur.
            </p>
          </motion.div>
        </TexturedReveal>
        
        <TexturedReveal direction="left" delay={0.3}>
          <div className="asymmetric-layout-reversed mb-32">
            <motion.div 
              className="cinematic-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image 
                src="/images/video-still.jpg" 
                alt="Vidéo réalisation"
                fill
                className="object-cover"
              />
              <motion.div 
                className="absolute bottom-6 left-6 z-10 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-2xl font-light mb-1 tracking-wide">ŒUVRES <span className="text-accent-1">VISUELLES</span></h3>
                <div className="h-px w-12 bg-accent-1 mb-3"></div>
                <p className="text-sm opacity-70 max-w-xs">2023</p>
              </motion.div>
            </motion.div>
            
            <div>
              <ScrollReveal width="100%" delay={0.3}>
                <h3 className="text-2xl md:text-3xl font-normal mb-6 tracking-wide">VIDÉOS</h3>
                <div className="h-px w-12 bg-accent-1 mb-8"></div>
                <p className="text-light-gray mb-8 text-justify">
                  Spécialiste des vidéos d'entreprise, documentaires et captations d'événements, je réalise des projets visuels captivants. Mon approche créative et technique permet de raconter des histoires authentiques qui suscitent l'émotion.
                </p>
                <motion.a 
                  href="#videos" 
                  className="inline-block px-8 py-3 border border-accent-1 text-accent-1 hover:bg-accent-1 hover:text-black transition-all duration-500"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  DÉCOUVRIR
                </motion.a>
              </ScrollReveal>
            </div>
          </div>
        </TexturedReveal>
        
        <TexturedReveal direction="right" delay={0.3}>
          <div className="asymmetric-layout mb-20">
            <div>
              <ScrollReveal width="100%" delay={0.3}>
                <h3 className="text-2xl md:text-3xl font-normal mb-6 tracking-wide">PHOTOS</h3>
                <div className="h-px w-12 bg-accent-1 mb-8"></div>
                <p className="text-light-gray mb-8 text-justify">
                  Capturer l'instant parfait, c'est ma passion. Du portrait à l'événementiel, en passant par la photo de voyage, chaque image raconte une histoire unique. Mon style se caractérise par des compositions soignées et une attention particulière aux détails.
                </p>
                <motion.a 
                  href="#photos" 
                  className="inline-block px-8 py-3 border border-accent-1 text-accent-1 hover:bg-accent-1 hover:text-black transition-all duration-500"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  DÉCOUVRIR
                </motion.a>
              </ScrollReveal>
            </div>
            
            <motion.div 
              className="cinematic-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image 
                src="/images/photo-still.jpg" 
                alt="Photographie"
                fill
                className="object-cover"
              />
              <motion.div 
                className="absolute bottom-6 left-6 z-10 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-2xl font-light mb-1 tracking-wide">INSTANTANÉS <span className="text-accent-1">ÉTERNELS</span></h3>
                <div className="h-px w-12 bg-accent-1 mb-3"></div>
                <p className="text-sm opacity-70 max-w-xs">2023</p>
              </motion.div>
            </motion.div>
          </div>
        </TexturedReveal>
      </div>
    </section>
  );
};

export default Realisations; 