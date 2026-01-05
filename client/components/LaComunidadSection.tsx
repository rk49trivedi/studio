import { motion } from 'framer-motion';

export default function LaComunidadSection() {
    const communityImages = [
        { img: '/section5/img1.svg', delay: 0.1, rotate: -2 },
        { img: '/section5/img2.svg', delay: 0.2, rotate: 2 },
        { img: '/section5/img3.svg', delay: 0.3, rotate: -2 },
        { img: '/section5/img4.svg', delay: 0.4, rotate: 2 },
        { img: '/section5/img5.svg', delay: 0.5, rotate: -2 },
        { img: '/section5/img6.svg', delay: 0.6, rotate: 2 },
        { img: '/section5/img7.svg', delay: 0.7, rotate: -2 },
    ];

    return (
        <section className="relative py-20 lg:py-32 bg-black overflow-hidden">

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

                {/* Community Images - Vertical Column, Centered */}
                <div className="flex flex-col items-center gap-8 lg:gap-12 max-w-4xl mx-auto">
                    {communityImages.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            viewport={{ once: true }}
                            className="relative group w-full max-w-2xl"
                            style={{ transform: `rotate(${item.rotate}deg)` }}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={`Community ${idx + 1}`}
                                    className="w-full h-auto object-cover grayscale"
                                />
                                {/* Play Button - Bottom Center */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center justify-center transition-transform"
                                    >
                                        <img
                                            src="/section5/play.svg"
                                            alt="Play"
                                            className="w-14 h-14"
                                        />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

