import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DecorativePlayButton from '@/components/DecorativePlayButton';
import MusicWave from '@/components/MusicWave';
import LoadingScreen from '@/components/LoadingScreen';
import LetsPlaySection from '@/components/LetsPlaySection';
import HeroSection from '@/components/HeroSection';

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

  const PlayButton = ({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) => {
    const sizes = {
      sm: 'w-16 h-16',
      md: 'w-20 h-20',
      lg: 'w-24 h-24',
    };

    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`${sizes[size]} ${className} rounded-full bg-brand-red/80 backdrop-blur-lg flex items-center justify-center group hover:bg-brand-red transition-colors`}
      >
        <svg className="w-1/2 h-1/2 text-white ml-1" fill="currentColor" viewBox="0 0 28 29">
          <path d="M11.5239 19.2616C10.7846 15.9664 9.3126 9.25935 9.33873 8.79338L19.1075 12.4832L11.5239 19.2616Z" />
        </svg>
      </motion.button>
    );
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Let's Play Section */}
      <LetsPlaySection />

      {/* Music Mix Section */}
      <section id="mission" className="relative py-20 lg:py-32 bg-brand-red">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white font-grifter text-4xl lg:text-[120px] leading-tight mb-6">
                Music <span className="font-gurmukhi">ਮਿਕਸ</span>
              </h2>
              <p className="text-white font-aeonik font-bold text-sm lg:text-lg uppercase leading-relaxed">
                As seen, sounds of Spanish & Punjabi are similar, energetic, and at times frantic at high pitch ..
                <br /><br />
                As a mix, this can make a great Combo never seen before ...especially on High Notes.
                <br /><br />
                And with the Collab of our legends like Diljit, Wazir, AP, Shubh with Latin Stars like Inna, Shakira, J Balvin, and the Gasolina guy Daddy Yankee would be a discovery in it's own kind ..
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/111388c9307d4d6924fdb3d4669ee6a8b7d8cf66"
                    alt="Music artist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/111388c9307d4d6924fdb3d4669ee6a8b7d8cf66"
                    alt="Music artist"
                    className="w-full h-full object-cover transform rotate-2"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/111388c9307d4d6924fdb3d4669ee6a8b7d8cf66"
                    alt="Music artist"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* La Oportunidad Section */}
      <section id="opportunities" className="relative py-20 lg:py-32 bg-brand-red">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white font-grifter text-5xl lg:text-[186px] leading-none uppercase mb-8">
                La <br />
                <span className="text-brand-red stroke-text">Oportunidad</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:pt-32"
            >
              <p className="text-white font-aeonik font-bold text-sm lg:text-lg uppercase leading-relaxed">
                To introduce Punjabi music, beats, and culture to Latin American world / audiences who are hungry for new, global sounds as rhythmic & energetic as Punjabi Music.
              </p>
            </motion.div>
          </div>

          {/* Background Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-96 overflow-hidden"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f750ed08f30a305f61ff60307ef816b2454b236a"
              alt=""
              className="w-full h-full object-cover transform rotate-2"
            />
          </motion.div>
        </div>
      </section>

      {/* La Comunidad Section */}
      <section className="relative py-20 lg:py-32 bg-black overflow-hidden">
        <DecorativePlayButton size={100} top="5%" right="5%" rotate={-15} delay={0.3} />
        <DecorativePlayButton size={75} bottom="10%" left="8%" rotate={25} delay={0.5} />

        <div className="container mx-auto px-6 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white font-grifter text-5xl lg:text-[155px] leading-none uppercase">
              La Comunidad
            </h2>
          </motion.div>

          {/* Community Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {[
              { img: 'https://api.builder.io/api/v1/image/assets/TEMP/cd78b5696d3ee1a2756169ba3ca2e61396c24cb7', delay: 0.1 },
              { img: 'https://api.builder.io/api/v1/image/assets/TEMP/1fb8411019382c41e166ce6dcf252e6b7cec5ceb', delay: 0.2 },
              { img: 'https://api.builder.io/api/v1/image/assets/TEMP/16556147be72db0fa421b288f69e7a042baa50f1', delay: 0.3 },
              { img: 'https://api.builder.io/api/v1/image/assets/TEMP/7938b58d247a76a5506b5fa4ea11614945d64571', delay: 0.4 },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                className="relative group aspect-[4/3] overflow-hidden rounded-lg"
              >
                <img
                  src={item.img}
                  alt={`Community ${idx + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <PlayButton className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="relative py-20 lg:py-32 bg-black">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative max-w-lg mx-auto">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/cf5c4fc92ee20ff35f47bd43e332884c1870c879"
                  alt="Jimmy Bindra - Founder"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </motion.div>

            {/* Founder Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <p className="text-white font-grifter text-3xl lg:text-5xl mb-4">OUR FOUNDER</p>
              <h3 className="text-brand-red font-grifter text-6xl lg:text-[182px] leading-none mb-6">
                JIMM<span className="inline-block">Y</span>
                <br />
                BINDRA
              </h3>

              <div className="space-y-6 text-white font-aeonik font-bold text-sm lg:text-lg uppercase leading-relaxed">
                <p>
                  A passionate Punjabi entrepreneur who's well travelled Globally & understands many Cultures, Music & Cinema from Jamaica, Mexico City, Medellin, Cuba & Latin America. Fluent in Spanish for almost 5years now is passionate about doing this great mix of rhythems & lyrics..
                </p>
                <p>
                  Also our Consultancy (SpanishLingo), have trained Professionals across US, Canada, Mexico, and Spain, building a foundation for global collaboration.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-brand-red text-white flex items-center justify-center hover:bg-brand-red/90 transition-colors shadow-lg glow-red"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}

      {/* Scroll Indicator */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-brand-red z-50 origin-left"
      />
    </div>
  );
}
