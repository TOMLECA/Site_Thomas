'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center"
      >
        {/* Logo placeholder - à remplacer par votre SVG */}
        <div className="mb-8 relative w-64 h-64 mx-auto">
          <div className="vhs-text text-4xl font-bold tracking-wider">
            TM FILMS
          </div>
        </div>

        <h1 className="vhs-text text-2xl md:text-4xl font-bold mb-6">
          L&apos;image à l&apos;ère du rétro-futur
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="space-y-4"
        >
          <Link href="/portfolio" className="vhs-button inline-block">
            Voir mon portfolio
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1.5 }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent"></div>
      </motion.div>
    </main>
  );
}
