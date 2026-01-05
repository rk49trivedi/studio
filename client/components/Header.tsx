import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 lg:px-24">
        <nav className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.svg"
              alt="SpanishLingo Studios"
              className="h-12 w-auto"
            />
          </Link>

          {/* Burger Menu Button - Always visible */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 z-50"
            aria-label="Toggle menu"
          >
            <img
              src="/menu.svg"
              alt="Menu"
              className="w-10 h-10"
            />
          </button>
        </nav>
      </div>

      {/* Slide-in Menu from Right */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/80 z-40"
            />

            {/* Slide Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black z-50 shadow-2xl border-l border-white/10"
            >
              <div className="flex flex-col h-full pt-24 px-8">
                <button
                  onClick={() => scrollToSection('mixes')}
                  className="text-white text-xl font-aeonik uppercase hover:text-brand-red transition-colors text-left py-4 border-b border-white/10 hover:border-brand-red"
                >
                  Mix Playlist
                </button>
                <button
                  onClick={() => scrollToSection('mission')}
                  className="text-white text-xl font-aeonik uppercase hover:text-brand-red transition-colors text-left py-4 border-b border-white/10 hover:border-brand-red"
                >
                  Our Mission
                </button>
                <button
                  onClick={() => scrollToSection('opportunities')}
                  className="text-white text-xl font-aeonik uppercase hover:text-brand-red transition-colors text-left py-4 border-b border-white/10 hover:border-brand-red"
                >
                  Opportunities
                </button>
                <button
                  onClick={() => scrollToSection('founder')}
                  className="text-white text-xl font-aeonik uppercase hover:text-brand-red transition-colors text-left py-4 border-b border-white/10 hover:border-brand-red"
                >
                  Founder
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white text-xl font-aeonik uppercase hover:text-brand-red transition-colors text-left py-4 border-b-2 border-brand-red"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
