"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import TexturedReveal from './TexturedReveal';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await emailjs.sendForm(
        'service_3ghfwvi',
        'template_dceyq7j',
        form.current,
        'dFHjjWLT3mHMeFokv'
      );

      setSubmitStatus({
        type: 'success',
        message: 'Message envoyé avec succès!'
      });
      
      if (form.current) {
        form.current.reset();
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Une erreur est survenue lors de l\'envoi du message.'
      });
    } finally {
      setIsSubmitting(false);
    }
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contactez-moi</h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              Discutons de votre prochain projet vidéo ou 3D
            </p>
          </motion.div>

          <motion.form
            ref={form}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="user_name" className="block text-sm sm:text-base font-medium text-white mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="w-full px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-1"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm sm:text-base font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="w-full px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-1"
                  placeholder="Votre email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm sm:text-base font-medium text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-1"
                placeholder="Votre message"
              ></textarea>
            </div>

            {submitStatus.message && (
              <div className={`text-center ${submitStatus.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {submitStatus.message}
              </div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 sm:px-8 py-2 sm:py-3 bg-accent-1 text-white rounded-lg font-medium transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent-1/90'
                }`}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 