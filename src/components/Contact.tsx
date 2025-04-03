"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TexturedReveal from './TexturedReveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
    console.log(formData);
    alert('Message envoyé avec succès!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const typewriterVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04
      }
    }
  };

  const letterVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const AnimatedText = ({ text }: { text: string }) => (
    <motion.span
      variants={typewriterVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="inline-block"
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={letterVariants} className="inline-block">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <section id="contact" className="section bg-[rgb(var(--background-rgb))]">
      <div className="cinematic-container">
        <TexturedReveal direction="top">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-normal tracking-widest mb-3 text-center">
              <AnimatedText text="PRENONS" /> <span className="text-accent-1"><AnimatedText text="CONTACT" /></span>
            </h2>
            <div className="flex justify-center mb-4">
              <motion.div 
                className="h-px w-16 bg-accent-1"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                style={{ transformOrigin: 'center' }}
              ></motion.div>
            </div>
            <p className="max-w-xl mx-auto text-center opacity-80 italic">
              Pour discuter de votre projet ou simplement échanger sur la création visuelle.
            </p>
          </motion.div>
        </TexturedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <TexturedReveal direction="left" delay={0.2}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-normal mb-6 tracking-wide">INFORMATIONS</h3>
              <div className="h-px w-12 bg-accent-1 mb-8"></div>
              
              <div className="space-y-6 text-justify">
                <p>
                  Je suis disponible pour tous types de projets vidéo et d'infographie 3D : captations d'événements, documentaires, vidéos promotionnelles, animations 3D, et bien plus encore.
                </p>
                <p>
                  Mon approche se fonde sur l'écoute attentive de vos besoins et de votre vision. J'apporte mon expertise technique et créative pour donner vie à vos idées.
                </p>
                
                <div className="mt-8">
                  <p className="text-accent-1 mb-1">Email</p>
                  <p className="opacity-80">contact@thomasmachard.com</p>
                  
                  <p className="text-accent-1 mb-1 mt-4">Téléphone</p>
                  <p className="opacity-80">+33 6 XX XX XX XX</p>
                  
                  <p className="text-accent-1 mb-1 mt-4">Localisation</p>
                  <p className="opacity-80">Lyon, France</p>
                </div>
              </div>
            </motion.div>
          </TexturedReveal>
          
          <TexturedReveal direction="right" delay={0.3}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-normal mb-6 tracking-wide">FORMULAIRE</h3>
              <div className="h-px w-12 bg-accent-1 mb-8"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-light opacity-80">NOM</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-[rgba(var(--foreground-rgb),0.3)] focus:border-accent-1 transition-colors duration-300 outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-light opacity-80">EMAIL</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-[rgba(var(--foreground-rgb),0.3)] focus:border-accent-1 transition-colors duration-300 outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-light opacity-80">MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-transparent border border-[rgba(var(--foreground-rgb),0.3)] focus:border-accent-1 transition-colors duration-300 outline-none resize-none"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full px-8 py-3 border border-accent-1 text-accent-1 hover:bg-accent-1 hover:text-black transition-all duration-500"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ENVOYER
                </motion.button>
              </form>
            </motion.div>
          </TexturedReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact; 