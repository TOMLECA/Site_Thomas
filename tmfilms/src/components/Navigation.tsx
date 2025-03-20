'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';

const Navigation = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="vhs-text text-xl font-bold">
            TM FILMS
          </Link>

          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`vhs-text text-sm ${
                  pathname === link.href
                    ? 'text-red-500'
                    : 'hover:text-red-500 transition-colors'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="vhs-button text-sm"
              aria-label="Changer le thème"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>

          <button className="md:hidden vhs-text">
            Menu
          </button>
        </div>
      </div>

      {/* Mobile menu - à implémenter plus tard si nécessaire */}
    </motion.nav>
  );
};

export default Navigation; 