import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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


  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 lg:px-24">
        <nav className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.svg"
              alt="SpanishLingo Studios"
              fetchPriority="high"
              width="120"
              height="40"
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
              className="w-20 h-20"
              fetchPriority="high"
              width="80"
              height="80"
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
              className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-black z-50 shadow-2xl border-l border-white/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-white hover:text-brand-red transition-colors z-10"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="flex flex-col h-full pt-24 px-8 pb-8">
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'instant' });
                    navigate('/');
                    setIsMenuOpen(false);
                  }}
                  className={`text-white text-xl font-aeonik uppercase hover:text-brand-red transition-colors text-left py-4 ${location.pathname === '/'
                    ? 'border-b-2 border-brand-red'
                    : 'border-b border-white/10 hover:border-brand-red'
                    }`}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'instant' });
                    navigate('/about');
                    setIsMenuOpen(false);
                  }}
                  className={`text-white text-xl font-aeonik uppercase hover:text-brand-red transition-colors text-left py-4 ${location.pathname === '/about'
                    ? 'border-b-2 border-brand-red'
                    : 'border-b border-white/10 hover:border-brand-red'
                    }`}
                >
                  About Us
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
