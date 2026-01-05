import { motion } from 'framer-motion';

export default function HeroSection() {
    // Artist images configuration
    const artistImages = [
        { src: '/hero/artist1.svg', alt: 'Artist 1' },
        { src: '/hero/artist2.svg', alt: 'Artist 2' },
        { src: '/hero/artist3.svg', alt: 'Artist 3' },
        { src: '/hero/artist4.svg', alt: 'Artist 4' },
    ];

    return (
        <section className="relative min-h-screen pt-40 lg:pt-56">
            {/* Animated Background Bars - Menu Style */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Thin animated bars */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: i % 2 === 0 ? '-100%' : '100%' }}
                        animate={{
                            x: i % 2 === 0 ? '100vw' : '-100vw',
                        }}
                        transition={{
                            duration: 20 + i * 3,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.3
                        }}
                        className="absolute bg-white/5"
                        style={{
                            top: `${8 + i * 7.5}%`,
                            width: '100%',
                            height: '2px',
                        }}
                    />
                ))}

                {/* Thicker accent bars */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={`accent-${i}`}
                        initial={{ x: i % 2 === 0 ? '-100%' : '100%' }}
                        animate={{
                            x: i % 2 === 0 ? '100vw' : '-100vw',
                        }}
                        transition={{
                            duration: 25 + i * 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 1.2
                        }}
                        className="absolute bg-brand-red/20"
                        style={{
                            top: `${15 + i * 30}%`,
                            width: '100%',
                            height: '3px',
                        }}
                    />
                ))}
            </div>

            {/* Background Artist Images - Black and White Grid */}
            <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4 gap-0 z-0">
                {artistImages.map((artist, idx) => (
                    <div key={idx} className="relative h-full bg-white/10 overflow-hidden">
                        <img
                            src={artist.src}
                            alt={artist.alt}
                            className="w-full h-full object-cover grayscale"
                            loading="eager"
                        />
                    </div>
                ))}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 gradient-overlay pointer-events-none z-[1]" />

            {/* Hero Content */}
            <div className="relative z-10 min-h-screen flex flex-col justify-end pb-8 lg:pb-16 pt-20">
                <div className="container mx-auto px-6 lg:px-24">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="max-w-7xl"
                    >
                        {/* SPANISHLINGO - Lower Left */}
                        <h1 className="text-white font-grifter text-3xl lg:text-5xl mb-2">
                            SPANISHLINGO
                        </h1>

                        {/* STUDIOS - Large Red Text Overlapping Images */}
                        <h2 className="text-brand-red font-grifter text-6xl lg:text-[200px] xl:text-[278px] leading-none mb-8">
                            STUDIOS
                        </h2>

                        {/* Tagline - Bottom Center */}
                        <div className="text-center">
                            <p className="text-white font-aeonik text-sm lg:text-lg uppercase tracking-wider">
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

