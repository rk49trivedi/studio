import { motion } from 'framer-motion';

export default function LaOportunidadSection() {
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
                        className="relative z-10 lg:w-1/2"
                    >
                        <h2 className="text-white font-grifter font-bold text-5xl lg:text-[185.57px] leading-[100%] tracking-[0%] uppercase mb-8">
                            <span className="whitespace-nowrap block">LA</span>
                            <span className="text-brand-red stroke-text font-grifter font-bold lg:text-[185.57px] leading-[100%] tracking-[0%] uppercase whitespace-nowrap block">OPORT</span>
                            <span className="text-brand-red stroke-text font-grifter font-bold lg:text-[185.57px] leading-[100%] tracking-[0%] uppercase whitespace-nowrap block">UNIDAD</span>
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
                        <p className="text-white font-aeonik font-bold text-sm lg:text-lg uppercase leading-relaxed mb-8">
                            To introduce Punjabi music, beats, and culture to Latin American world / audiences who are hungry for new, global sounds as rhythmic & energetic as Punjabi Music.
                        </p>

                        {/* Image with Play Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src="/section4/img1.svg"
                                    alt="La Oportunidad"
                                    className="w-full h-auto object-cover grayscale"
                                />
                                {/* Play Button Overlay */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center justify-center transition-transform shadow-lg"
                                    >
                                        <img
                                            src="/section4/playbutton.svg"
                                            alt="Play"
                                            className="w-14 h-14"
                                        />
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

