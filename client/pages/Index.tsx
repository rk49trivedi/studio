import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetsPlaySection from '@/components/LetsPlaySection';
import HeroSection from '@/components/HeroSection';
import MusicMixSection from '@/components/MusicMixSection';
import LaOportunidadSection from '@/components/LaOportunidadSection';
import LaComunidadSection from '@/components/LaComunidadSection';
import FounderSection from '@/components/FounderSection';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function Index() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Let's Play Section */}
      <LetsPlaySection />

      {/* Music Mix Section */}
      <MusicMixSection />

      {/* La Oportunidad Section */}
      <LaOportunidadSection />

      {/* La Comunidad Section */}
      <LaComunidadSection />

      {/* Founder Section */}
      <FounderSection />

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
