"use client";

import React from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

const Approche: React.FC = () => {
  return (
    <section id="approche" className="section bg-black text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal width="100%">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Une approche <span className="text-white">unique</span></h2>
          </ScrollReveal>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-light-gray mb-4">
              À l'écoute de vos besoins, je propose une approche personnalisée pour chaque projet. 
              La qualité et l'authenticité sont au cœur de ma démarche créative.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-light-gray mb-4">
              De la pré-production à la post-production, chaque étape est réalisée avec soin et attention, 
              pour garantir un résultat qui correspond parfaitement à vos attentes.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-light-gray mb-4">
              Mon expérience dans différents domaines me permet d'apporter une vision unique 
              et d'adapter mon style aux exigences spécifiques de votre projet.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8 flex justify-center"
          >
            <motion.div 
              className="h-12 w-12 bg-blue-600 rounded-full"
              whileHover={{ scale: 1.2, rotate: 90 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Approche; 