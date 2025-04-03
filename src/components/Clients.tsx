"use client";

import React from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

interface ClientsProps {
  logos: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

const fadeInAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    },
  }),
};

const Clients: React.FC<ClientsProps> = ({ logos }) => {
  return (
    <section id="clients" className="section bg-black text-white">
      <div className="container mx-auto text-center">
        <ScrollReveal width="100%">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Ils m'ont confié leur <span className="text-white">projet vidéo</span></h2>
        </ScrollReveal>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="client-logos py-8"
        >
          {logos.map((logo, index) => (
            <motion.div 
              key={index} 
              className="mx-4 my-4"
              custom={index}
              initial="hidden"
              whileInView="show"
              variants={fadeInAnimation}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <Image 
                src={logo.src} 
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="max-h-16 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients; 