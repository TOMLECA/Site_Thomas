"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Videos: React.FC = () => {
  const projects = [
    {
      title: "Publicité - Marque X",
      category: "Publicité",
      description: "Campagne publicitaire pour une marque de luxe",
      image: "/images/videos/pub1.jpg",
      videoUrl: "https://vimeo.com/example1"
    },
    {
      title: "Court-métrage - Le Voyage",
      category: "Fiction",
      description: "Un court-métrage sur le voyage intérieur",
      image: "/images/videos/fiction1.jpg",
      videoUrl: "https://vimeo.com/example2"
    },
    {
      title: "Publicité - Marque Y",
      category: "Publicité",
      description: "Spot publicitaire pour une marque de sport",
      image: "/images/videos/pub2.jpg",
      videoUrl: "https://vimeo.com/example3"
    },
    {
      title: "Série - Épisode Pilote",
      category: "Fiction",
      description: "Épisode pilote d'une série dramatique",
      image: "/images/videos/fiction2.jpg",
      videoUrl: "https://vimeo.com/example4"
    }
  ];

  return (
    <section id="videos" className="py-20 bg-[rgb(var(--background-rgb))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Mes Réalisations</h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Découvrez mes projets de publicité et de fiction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-accent-1 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 text-sm sm:text-base">{project.description}</p>
              </div>

              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos; 