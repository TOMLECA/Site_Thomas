'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ProjectModal from '@/components/ProjectModal';
import { Project, ProjectCategory } from '@/types/project';

// Données de démonstration
const projects: Project[] = [
  {
    id: 1,
    title: 'Film Promotionnel XYZ',
    category: 'video',
    thumbnail: '/placeholder.jpg',
    description: 'Vidéo promotionnelle mettant en valeur les services innovants de l\'entreprise XYZ. Réalisation complète depuis le storyboard jusqu\'au montage final.',
    technologies: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    images: ['/project1-1.jpg', '/project1-2.jpg', '/project1-3.jpg'],
    videoUrl: 'https://example.com/video1.mp4'
  },
  {
    id: 2,
    title: 'Modélisation 3D Produit',
    category: '3d',
    thumbnail: '/placeholder.jpg',
    description: 'Modélisation 3D photoréaliste d\'une gamme de produits pour un catalogue en ligne. Attention particulière portée aux textures et à l\'éclairage.',
    technologies: ['Blender', 'Substance Painter', 'Unity'],
    images: ['/project2-1.jpg', '/project2-2.jpg']
  },
  {
    id: 3,
    title: 'Animation Logo',
    category: 'motion',
    thumbnail: '/placeholder.jpg',
    description: 'Animation de logo dynamique avec effets VHS et glitch pour une marque de vêtements rétro.',
    technologies: ['After Effects', 'Cinema 4D', 'Photoshop'],
    videoUrl: 'https://example.com/video3.mp4'
  },
  {
    id: 4,
    title: 'Court-métrage "Rétro"',
    category: 'video',
    thumbnail: '/placeholder.jpg',
    description: 'Court-métrage expérimental explorant l\'esthétique des années 80 à travers une histoire de science-fiction.',
    technologies: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Red Camera'],
    images: ['/project4-1.jpg', '/project4-2.jpg'],
    videoUrl: 'https://example.com/video4.mp4'
  },
  {
    id: 5,
    title: 'Environnement 3D',
    category: '3d',
    thumbnail: '/placeholder.jpg',
    description: 'Création d\'un environnement cyberpunk complet pour un jeu vidéo indépendant, incluant modélisation, texturing et éclairage.',
    technologies: ['Maya', 'ZBrush', 'Unreal Engine'],
    images: ['/project5-1.jpg', '/project5-2.jpg', '/project5-3.jpg']
  },
  {
    id: 6,
    title: 'Motion Design Event',
    category: 'motion',
    thumbnail: '/placeholder.jpg',
    description: 'Série d\'animations pour les réseaux sociaux d\'un festival de musique électronique, incluant teasers et transitions.',
    technologies: ['After Effects', 'Illustrator', 'Mocha Pro'],
    videoUrl: 'https://example.com/video6.mp4'
  }
];

const categories: { id: ProjectCategory; label: string }[] = [
  { id: 'video', label: 'Vidéo' },
  { id: '3d', label: '3D' },
  { id: 'motion', label: 'Motion Design' }
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="vhs-text text-4xl font-bold mb-8 text-center"
      >
        Portfolio
      </motion.h1>

      {/* Filtres */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center gap-4 mb-8"
      >
        <button
          onClick={() => setSelectedCategory('all')}
          className={`vhs-button text-sm ${
            selectedCategory === 'all' ? 'border-red-500' : ''
          }`}
        >
          Tous
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`vhs-button text-sm ${
              selectedCategory === cat.id ? 'border-red-500' : ''
            }`}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer"
              layout
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video bg-gray-800 relative overflow-hidden rounded-lg">
                {/* Effet VHS sur l'image */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                <div className="absolute inset-0 vhs-effect opacity-30" />
                
                {/* Contenu */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="vhs-text text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-beige/80 mb-2 line-clamp-2">{project.description}</p>
                  <span className="inline-block px-2 py-1 bg-red-500/20 text-xs rounded">
                    {categories.find(cat => cat.id === project.category)?.label}
                  </span>
                </div>

                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="vhs-text">Voir le projet</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal de projet */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
} 