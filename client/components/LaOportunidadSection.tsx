import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

export default function LaOportunidadSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <section id="opportunities" className="relative py-20 lg:py-32 bg-black overflow-hidden">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="relative">
                    {/* Left Side - Text (can overlap with image) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative z-10 la-oportunidad-left"
                    >
                        <h2 className="la-oportunidad-heading mb-8">
                            <span className="whitespace-nowrap block">LA</span>
                            <span className="text-brand-red stroke-text whitespace-nowrap block">OPORT</span>
                            <span className="text-brand-red stroke-text whitespace-nowrap block">UNIDAD</span>
                        </h2>
                    </motion.div>

                    {/* Right Side - Text and Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative lg:absolute lg:right-0 lg:top-0 lg:w-1/2"
                    >
                        {/* Descriptive Text */}
                        <p className="la-oportunidad-description mb-8">
                            To introduce Punjabi music, beats, and culture to Latin American world / audiences who are hungry for new, global sounds as rhythmic & energetic as Punjabi Music.
                        </p>

                        {/* Image with Play Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="relative group la-oportunidad-image-container"
                        >
                            <div className="la-oportunidad-image-wrapper">
                                <img
                                    src="/section4/img1.svg"
                                    alt="La Oportunidad"
                                    className="la-oportunidad-image object-cover grayscale"
                                />
                                {/* Play/Pause Button Overlay */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                                    <motion.button
                                        onClick={togglePlayPause}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center justify-center transition-transform shadow-lg bg-brand-red rounded-full p-3"
                                    >
                                        {isPlaying ? (
                                            <Pause className="w-8 h-8 text-white" fill="white" />
                                        ) : (
                                            <Play className="w-8 h-8 text-white" fill="white" />
                                        )}
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

