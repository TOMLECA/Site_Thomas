"use client";

import React from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

const Passion: React.FC = () => {
  return (
    <section id="passion" className="section bg-blue-500 text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ScrollReveal width="100%">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Une passion née <span className="text-black">d'un engagement</span></h2>
          </ScrollReveal>
          
          <ScrollReveal width="100%" delay={0.2}>
            <p className="text-light-gray mb-8 max-w-2xl">
              La vidéo est plus qu'un métier, c'est un art de raconter des histoires authentiques. 
              Chaque projet est une nouvelle opportunité de capturer l'essence d'un moment, 
              d'une personne ou d'une vision.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="bg-white h-1 w-24 rounded"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
};

export default Passion; 