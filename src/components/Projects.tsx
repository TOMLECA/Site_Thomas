"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import Interstitial from './Interstitial';
import TexturedReveal from './TexturedReveal';

const projectData = [
  {
    id: 1,
    title: "LA VOIX DU SILENCE",
    category: "COURT-MÉTRAGE",
    year: "2023",
    image: "/images/video-still.jpg",
    link: "#project1"
  },
  {
    id: 2,
    title: "RÉSONANCE",
    category: "DOCUMENTAIRE",
    year: "2023",
    image: "/images/video-still.jpg",
    link: "#project2"
  }
];

const Projects: React.FC = () => {
  return (
    <>
      <Interstitial 
        image="/images/video-still.jpg"
        quote="Le cinéma, c'est l'écriture moderne dont l'encre est la lumière."
        author="Jean Cocteau"
      />
      
      <section id="projects" className="section bg-[rgb(var(--background-rgb))]">
        <div className="cinematic-container">
          <TexturedReveal direction="top">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-normal tracking-widest mb-3 text-center">PROJETS <span className="text-accent-1">SÉLECTIONNÉS</span></h2>
              <p className="max-w-xl mx-auto text-center opacity-80 italic">
                Une collection d'œuvres qui définissent ma vision cinématographique.
              </p>
            </motion.div>
          </TexturedReveal>
          
          <TexturedReveal direction="bottom" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {projectData.map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  title={project.title}
                  category={project.category}
                  year={project.year}
                  image={project.image}
                  link={project.link}
                />
              ))}
            </div>
          </TexturedReveal>
          
          <TexturedReveal direction="left" delay={0.4}>
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.a 
                href="/tous-les-projets" 
                className="inline-block px-8 py-3 border border-accent-1 text-accent-1 hover:bg-accent-1 hover:text-black transition-all duration-500"
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                VOIR TOUS LES PROJETS
              </motion.a>
            </motion.div>
          </TexturedReveal>
        </div>
      </section>
    </>
  );
};

export default Projects; 