import { motion } from 'framer-motion';

export default function MusicMixSection() {
    const images = [
        { src: '/section3/rec1.svg', alt: 'Music artist 1', direction: 'bottom', rotate: 2, grayscale: true, left: '-35%', top: '10%', zIndex: 1 },
        { src: '/section3/rec2.svg', alt: 'Music artist 2', direction: 'top', rotate: -2, grayscale: false, left: '-2%', top: '15%', zIndex: 2 },
        { src: '/section3/rec3.svg', alt: 'Music artist 3', direction: 'bottom', rotate: 2, grayscale: false, left: '55%', top: '20%', zIndex: 3 },
    ];

    return (
        <section id="mission" className="relative " >
            <div className="bg-brand-red pt-10 pb-40">
                <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-white font-grifter text-4xl lg:text-[120px] leading-tight mb-6 whitespace-nowrap">
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
                        className="relative flex items-center justify-center"
                    >
                        <div className="relative w-full" style={{ height: '600px' }}>
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
                                    className="absolute overflow-hidden"
                                    style={{
                                        left: image.left,
                                        top: image.top,
                                        zIndex: image.zIndex,
                                        transform: `rotate(${image.rotate}deg)`,
                                    }}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className={image.grayscale ? 'grayscale' : ''}
                                        style={{
                                            width: '555.29px',
                                            height: '548.57px',
                                        }}
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

