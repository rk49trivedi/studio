import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHeroSection from '@/components/AboutHeroSection';
import ArtistsGridSection from '@/components/ArtistsGridSection';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function About() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <style>{`
        .container {
          max-width: 1633.47px !important;
          width: 100%;
        }
      `}</style>
      <Header />

      {/* Hero Section */}
      <AboutHeroSection />

      {/* Artists Grid Section */}
      <ArtistsGridSection />

      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTopButton show={showScrollTop} onClick={scrollToTop} />

      {/* Scroll Indicator */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-brand-red z-50 origin-left"
      />
    </div>
  );
}


