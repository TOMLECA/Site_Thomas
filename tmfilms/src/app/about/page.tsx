import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="vhs-text text-4xl font-bold mb-8 text-center">
          À propos
        </h1>

        <div className="space-y-6 text-lg">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="leading-relaxed"
          >
            Passionné par l&apos;image sous toutes ses formes, je suis un créateur visuel spécialisé dans la production vidéo et l&apos;infographie 3D. Mon approche unique combine techniques modernes et esthétique rétro pour créer des expériences visuelles mémorables.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
          >
            <h2 className="vhs-text text-2xl font-bold mb-4">Mes Services</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Production vidéo créative</li>
              <li>Modélisation et animation 3D</li>
              <li>Motion design</li>
              <li>Effets spéciaux numériques</li>
            </ul>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="leading-relaxed"
          >
            Chaque projet est une nouvelle opportunité de repousser les limites de la créativité et de donner vie à des idées uniques. Je m&apos;efforce de créer des contenus qui captivent, inspirent et laissent une impression durable.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
} 