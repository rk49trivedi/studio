import { motion } from 'framer-motion';

export default function HeroSection() {
    // Artist images configuration
    const artistImages = [
        { src: '/hero/artist1_new.png', alt: 'Artist 1' },
        { src: '/hero/artist2.png', alt: 'Artist 2' },
        { src: '/hero/artist3.png', alt: 'Artist 3' },
        { src: '/hero/artist4.png', alt: 'Artist 4' },
    ];

    // Generate random organic wave patterns for each grid item
    // Wave starts from bottom (artist head) and moves up/down organically
    // Minimum height maintained - never goes all the way down
    const generateWavePattern = (index: number) => {
        const patterns = [
            // Pattern 1: Quick rise, minor dip, rise again
            [0.5, 0.65, 0.8, 0.9, 0.95, 0.75, 0.6, 0.7, 0.92, 0.68, 0.55, 0.65, 0.85, 0.5],
            // Pattern 2: Gradual build, multiple peaks, minor dips
            [0.55, 0.7, 0.82, 0.9, 0.95, 0.75, 0.88, 0.95, 0.65, 0.8, 0.92, 0.7, 0.6, 0.55],
            // Pattern 3: Erratic music wave - up, minor down, up again
            [0.5, 0.75, 0.6, 0.85, 0.65, 0.95, 0.7, 0.9, 0.58, 0.8, 0.93, 0.68, 0.55, 0.75, 0.5],
            // Pattern 4: Multiple peaks with minor dips between
            [0.55, 0.65, 0.8, 0.88, 0.95, 0.72, 0.9, 0.95, 0.68, 0.85, 0.92, 0.65, 0.6, 0.55],
        ];
        return patterns[index % patterns.length];
    };

    return (
        <section className="relative min-h-screen hero-section-container">

            {/* Background Artist Images - Light Gray Background Grid */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="w-full h-full">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 w-full h-full">
                        {artistImages.map((artist, idx) => (
                            <div
                                key={idx}
                                className={`relative overflow-hidden flex items-center justify-center ${(idx === 0 || idx === 3) ? 'hidden lg:flex' : ''
                                    }`}
                            >
                                {/* Animated Wave Background - Starts from artist head (bottom) */}
                                <motion.div
                                    className="absolute inset-0 bg-white/10"
                                    animate={{
                                        scaleY: generateWavePattern(idx),
                                    }}
                                    transition={{
                                        duration: 20 + idx * 0.4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: idx * 0.2,
                                    }}
                                    style={{
                                        transformOrigin: "bottom",
                                    }}
                                />
                                <img
                                    src={artist.src}
                                    alt={artist.alt}
                                    className="object-contain grayscale w-full h-full scale-[2] relative z-10"
                                    loading="eager"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 gradient-overlay pointer-events-none z-[1]" />

            {/* Hero Content */}
            <div className="relative z-10 min-h-screen flex flex-col justify-end hero-content-wrapper">
                <div className="container mx-auto hero-content-padding">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="max-w-7xl w-full"
                    >
                        {/* SPANISHLINGO - Lower Left */}
                        <h1 className="hero-spanishlingo mb-2">
                            SPANISHLINGO
                        </h1>

                        {/* STUDIOS - Large Red Text Overlapping Images */}
                        <h2 className="hero-studios mb-4 md:mb-6 lg:mb-8">
                            STUDIOS
                        </h2>

                        {/* Tagline - Bottom Center */}
                        <div className="text-center hero-section-tagline">
                            <p className="hero-tagline uppercase">
                                A RICH MIX OF SPANISH X{' '}
                                <span className="font-gurmukhi">ਪੰਜਾਬੀ</span> MUSIC FUSION
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

