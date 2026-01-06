import { motion } from 'framer-motion';

export default function MusicMixSection() {
    const images = [
        { src: '/section3/rec1.svg', alt: 'Music artist 1', direction: 'bottom', grayscale: true, className: 'music-mix-image-1' },
        { src: '/section3/rec2.svg', alt: 'Music artist 2', direction: 'top', grayscale: false, className: 'music-mix-image-2' },
        { src: '/section3/rec3.svg', alt: 'Music artist 3', direction: 'bottom', grayscale: false, className: 'music-mix-image-3' },
    ];

    return (
        <section id="mission" className="relative bg-brand-red min-h-screen flex items-center">
            <div className="container mx-auto px-6 lg:px-24 py-10">
                <div className="flex lg:flex-row flex-col gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="music-mix-content-left"
                    >
                        <h2 className="music-mix-heading">
                            Music <span className="font-gurmukhi">ਮਿਕਸ</span>
                        </h2>
                        <p className="text-white font-aeonik font-bold text-sm lg:text-lg uppercase leading-relaxed music-mix-description">
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
                        className="relative flex items-center justify-center music-mix-content-right"
                    >
                        <div className="music-mix-images-container">
                            {images.map((image, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{
                                        opacity: 0,
                                        y: image.direction === 'bottom' ? 100 : -100
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: idx * 0.2
                                    }}
                                    viewport={{ once: true }}
                                    className={`music-mix-image-item ${image.className}`}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className={`music-mix-image ${image.grayscale ? 'grayscale' : ''}`}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

