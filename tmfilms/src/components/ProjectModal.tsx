'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types/project';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-4xl bg-black border-2 border-beige p-6 rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Bouton fermer */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 vhs-text hover:text-red-500"
          >
            ✕
          </button>

          {/* En-tête */}
          <h2 className="vhs-text text-3xl mb-4">{project.title}</h2>
          
          {/* Contenu principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Média principal */}
            <div className="aspect-video bg-gray-800 relative overflow-hidden rounded">
              <div className="absolute inset-0 vhs-effect opacity-30" />
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Informations */}
            <div className="space-y-4">
              <div>
                <h3 className="vhs-text text-xl mb-2">Description</h3>
                <p className="text-beige/80">{project.description}</p>
              </div>

              <div>
                <h3 className="vhs-text text-xl mb-2">Catégorie</h3>
                <span className="inline-block px-3 py-1 bg-red-500/20 rounded">
                  {project.category}
                </span>
              </div>

              {/* Technologies utilisées */}
              <div>
                <h3 className="vhs-text text-xl mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 bg-blue-500/20 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 