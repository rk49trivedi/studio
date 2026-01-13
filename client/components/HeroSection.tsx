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

    // STUDIOS animation configuration
    // Order: D (from bottom) → U, T, S (from left) → I, O, S (from right)
    // Visual order in word: S-T-U-D-I-O-S
    const studiosChars = ['S', 'T', 'U', 'D', 'I', 'O', 'S'];

    // SPANISHLINGO animation - comes from left after STUDIOS completes
    const spanishlingoChars = 'SPANISHLINGO'.split('');
    const spanishlingoStartDelay = 2.5; // After STUDIOS animation completes (last char at 1.8 delay + 0.6 duration = 2.4s)

    return (
        <section className="relative min-h-[77vh] md:min-h-screen hero-section-container">

            {/* Background Artist Images - Light Gray Background Grid */}
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
                <div className="w-full h-full">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 w-full h-full hero-artist-grid">
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
                                    className="object-contain grayscale w-full h-full hero-artist-image relative z-10"
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
            <div className="relative z-10 min-h-[77vh] md:min-h-screen flex flex-col justify-end hero-content-wrapper">
                <div className="container mx-auto hero-content-padding">
                    <div className="max-w-7xl w-full hero-content-inner">
                        {/* SPANISHLINGO - Lower Left - Animated from left */}
                        <h1 className="hero-spanishlingo">
                            {spanishlingoChars.map((char, index) => (
                                <motion.span
                                    key={`spanishlingo-${index}`}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: spanishlingoStartDelay + (index * 0.1),
                                        ease: [0.25, 0.1, 0.25, 1]
                                    }}
                                    style={{ display: 'inline-block' }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </h1>

                        {/* STUDIOS - Large Red Text Overlapping Images - Animated */}
                        <h2 className="hero-studios">
                            {studiosChars.map((char, index) => {
                                // Handle the two 'S' characters differently
                                const isFirstS = char === 'S' && index === 0;
                                const isSecondS = char === 'S' && index === 6;
                                const isD = char === 'D' && index === 3;

                                let animationConfig;
                                if (isD) {
                                    // D comes first with zoom-in effect
                                    animationConfig = {
                                        initial: { opacity: 0, scale: 0 },
                                        animate: { opacity: 1, scale: 1 },
                                        transition: {
                                            duration: 1.5,
                                            delay: 0.5,
                                            ease: [0.4, 0, 0.2, 1]
                                        }
                                    };
                                } else if (index === 2) {
                                    // U comes from left (first after D)
                                    animationConfig = {
                                        initial: { opacity: 0, x: -100 },
                                        animate: { opacity: 1, x: 0 },
                                        transition: {
                                            duration: 2.5,
                                            delay: 0.8,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }
                                    };
                                } else if (index === 1) {
                                    // T comes from left (second after D)
                                    animationConfig = {
                                        initial: { opacity: 0, x: -100 },
                                        animate: { opacity: 1, x: 0 },
                                        transition: {
                                            duration: 2.5,
                                            delay: 1.0,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }
                                    };
                                } else if (isFirstS) {
                                    // First S comes from left (third after D)
                                    animationConfig = {
                                        initial: { opacity: 0, x: -100 },
                                        animate: { opacity: 1, x: 0 },
                                        transition: {
                                            duration: 2.5,
                                            delay: 1.2,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }
                                    };
                                } else if (index === 4) {
                                    // I comes from right
                                    animationConfig = {
                                        initial: { opacity: 0, x: 100 },
                                        animate: { opacity: 1, x: 0 },
                                        transition: {
                                            duration: 2.5,
                                            delay: 1.4,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }
                                    };
                                } else if (index === 5) {
                                    // O comes from right
                                    animationConfig = {
                                        initial: { opacity: 0, x: 100 },
                                        animate: { opacity: 1, x: 0 },
                                        transition: {
                                            duration: 2.5,
                                            delay: 1.6,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }
                                    };
                                } else if (isSecondS) {
                                    // Second S comes from right
                                    animationConfig = {
                                        initial: { opacity: 0, x: 100 },
                                        animate: { opacity: 1, x: 0 },
                                        transition: {
                                            duration: 2.5,
                                            delay: 1.8,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }
                                    };
                                }

                                return (
                                    <motion.span
                                        key={`studios-${index}`}
                                        initial={animationConfig?.initial}
                                        animate={animationConfig?.animate}
                                        transition={animationConfig?.transition}
                                        style={{ display: 'inline-block' }}
                                    >
                                        {char}
                                    </motion.span>
                                );
                            })}
                        </h2>

                        {/* Tagline - Bottom Center */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 4.2 }}
                            className="text-left md:text-center hero-section-tagline"
                        >
                            <p className="hero-tagline uppercase">
                                A RICH MIX OF SPANISH X{' '}
                                <span className="font-gurmukhi">ਪੰਜਾਬੀ</span> MUSIC FUSION
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

