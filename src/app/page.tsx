import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Realisations from '@/components/Realisations';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  // ID de la vidéo YouTube fournie : https://www.youtube.com/watch?v=w2f8lc-d4kw
  const youtubeVideoId = "w2f8lc-d4kw";

  return (
    <main>
      <Navigation />
      <Hero 
        backgroundImage="/images/hero-bg.jpg" 
        youtubeVideoId={youtubeVideoId}
      />
      <Realisations />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
} 