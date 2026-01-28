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

  // Preload LetsPlaySection images after hero section loads
  useEffect(() => {
    // Wait 2 seconds after page load to let hero section render first
    const preloadTimer = setTimeout(() => {
      // LetsPlaySection images (17 total)
      const letsPlayImages = [
        // Vinyl records (PNGs)
        '/section2/Group 58.png', '/section2/Group 68.png', '/section2/Group 71.png',
        '/section2/Group 69.png', '/section2/Group 59.png', '/section2/Group 65.png',
        '/section2/Group 66.png', '/section2/Group 70.png', '/section2/Group 67.png',
        '/section2/Group 61.png',
        // Sound waves (PNGs)
        '/section2/Mask group1.png', '/section2/Mask group2.png',
        '/section2/Mask group3.png', '/section2/Mask group4.png',
        // DJ Controller (SVGs)
        '/section2/DJController.svg', '/section2/contrler_cacet1.svg',
        '/section2/contrler_cacet2.svg',
      ];

      // Use low-priority prefetch to not block hero section
      letsPlayImages.forEach(imagePath => {
        const link = document.createElement('link');
        link.rel = 'prefetch'; // Low priority, won't block current page
        link.as = 'image';
        link.href = imagePath;
        link.type = imagePath.endsWith('.svg') ? 'image/svg+xml' : 'image/png';
        document.head.appendChild(link);
      });
    }, 2000); // Start preloading after 2 seconds

    return () => clearTimeout(preloadTimer);
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
