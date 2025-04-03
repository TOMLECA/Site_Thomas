"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface InterstitialProps {
  image: string;
  quote: string;
  author?: string;
}

const Interstitial: React.FC<InterstitialProps> = ({ image, quote, author }) => {
  return (
    <section className="a24-interstitial">
      <div className="relative w-full h-full">
        <Image 
          src={image} 
          alt={quote}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>
      
      <div className="container mx-auto relative z-20">
        <motion.blockquote
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl font-light italic tracking-wide mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            "{quote}"
          </motion.p>
          
          {author && (
            <motion.footer
              className="text-sm text-accent-1 opacity-80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
            >
              — {author}
            </motion.footer>
          )}
        </motion.blockquote>
      </div>
    </section>
  );
};

export default Interstitial; 