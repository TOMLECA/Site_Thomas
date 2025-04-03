"use client";

import React from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

interface InstagramProps {
  username: string;
  posts: {
    src: string;
    alt: string;
  }[];
}

const fadeInAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.15 * i,
      duration: 0.6,
      ease: "easeOut"
    },
  }),
};

const Instagram: React.FC<InstagramProps> = ({ username, posts }) => {
  return (
    <section id="instagram" className="section bg-black text-white">
      <div className="container mx-auto">
        <motion.div 
          className="max-w-3xl mx-auto bg-dark-gray p-8 rounded"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ScrollReveal width="100%">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Retrouvez-moi sur <span className="italic">Instagram</span></h2>
          </ScrollReveal>
          
          <motion.div 
            className="flex items-center mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl mr-3"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              T
            </motion.div>
            <div>
              <p className="font-semibold">{username}</p>
            </div>
          </motion.div>
          
          <div className="instagram-grid mb-6">
            {posts.map((post, index) => (
              <motion.div 
                key={index} 
                className="relative aspect-square"
                variants={fadeInAnimation}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src={post.src} 
                    alt={post.alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href={`https://instagram.com/${username}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Suivre
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Instagram; 