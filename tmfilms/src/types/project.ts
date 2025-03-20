export type ProjectCategory = 'video' | '3d' | 'motion';

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  thumbnail: string;
  description: string;
  technologies?: string[];
  images?: string[];
  videoUrl?: string;
} 