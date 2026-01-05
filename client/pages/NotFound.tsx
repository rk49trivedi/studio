import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-brand-red font-grifter text-8xl lg:text-[200px] leading-none mb-6">
            404
          </h1>
          <h2 className="text-white font-grifter text-3xl lg:text-6xl mb-8">
            PAGE NOT FOUND
          </h2>
          <p className="text-white/70 font-aeonik text-lg mb-12 uppercase">
            The beat you're looking for doesn't exist yet. Let's get you back to the rhythm.
          </p>
          
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-full bg-brand-red text-white font-aeonik font-bold text-lg uppercase hover:bg-brand-red/90 transition-colors"
            >
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}
