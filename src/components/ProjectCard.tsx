"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, year, image, link }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <a href={link} className="block relative overflow-hidden">
        <div className="relative aspect-[4/5] w-full">
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/20 hover:bg-black/50 transition-colors duration-700"></div>
        </div>
        
        <motion.div 
          className="absolute bottom-6 left-6 z-10 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="overflow-hidden">
            <motion.h3 
              className="text-xl font-light mb-1 tracking-wide"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h3>
          </div>
          
          <motion.div 
            className="h-px w-12 bg-accent-1 mb-3"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            style={{ transformOrigin: 'left' }}
          ></motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="text-sm opacity-80 font-light">{category}</p>
            <p className="text-sm opacity-60">{year}</p>
          </motion.div>
        </motion.div>
      </a>
    </motion.div>
  );
};

export default ProjectCard; 