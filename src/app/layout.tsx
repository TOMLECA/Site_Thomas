import './globals.css';
import type { Metadata } from 'next';
import GrainEffect from '@/components/GrainEffect';

export const metadata: Metadata = {
  title: 'Thomas Machard - Vidéaste & Infographiste',
  description: 'Portfolio de Thomas Machard, vidéaste et infographiste spécialisé dans la création de contenu visuel captivant.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-black text-white">
        {children}
        <GrainEffect />
      </body>
    </html>
  );
} 