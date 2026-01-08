import { useEffect, useState, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { AudioProvider } from '@/contexts/AudioContext';

// Lazy load below-the-fold sections for better initial load performance
const LetsPlaySection = lazy(() => import('@/components/LetsPlaySection'));
const MusicMixSection = lazy(() => import('@/components/MusicMixSection'));
const LaOportunidadSection = lazy(() => import('@/components/LaOportunidadSection'));
const LaComunidadSection = lazy(() => import('@/components/LaComunidadSection'));
const FounderSection = lazy(() => import('@/components/FounderSection'));
const ScrollToTopButton = lazy(() => import('@/components/ScrollToTopButton'));

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
    <AudioProvider>
      <div className="min-h-screen bg-black overflow-x-hidden">

        <Header />

        {/* Hero Section */}
        <HeroSection />

        {/* Let's Play Section - Lazy loaded */}
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <LetsPlaySection />
        </Suspense>

        {/* Music Mix Section - Lazy loaded */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <MusicMixSection />
        </Suspense>

        {/* La Oportunidad Section - Lazy loaded */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <LaOportunidadSection />
        </Suspense>

        {/* La Comunidad Section - Lazy loaded */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <LaComunidadSection />
        </Suspense>

        {/* Founder Section - Lazy loaded */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <FounderSection />
        </Suspense>

        <Footer />

        {/* Scroll to Top Button - Lazy loaded */}
        <Suspense fallback={null}>
          <ScrollToTopButton show={showScrollTop} onClick={scrollToTop} />
        </Suspense>

        {/* Scroll Indicator */}
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed top-0 left-0 right-0 h-1 bg-brand-red z-50 origin-left"
        />
      </div>
    </AudioProvider>
  );
}
