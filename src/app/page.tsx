"use client";

import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Videos from '@/components/Videos';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Videos />
      <Contact />
      <Footer />
    </main>
  );
} 