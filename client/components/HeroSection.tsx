import { motion } from 'framer-motion';

export default function HeroSection() {
    // Artist images configuration
    const artistImages = [
        { src: '/hero/artist1.png', alt: 'Artist 1' },
        { src: '/hero/artist2.png', alt: 'Artist 2' },
        { src: '/hero/artist3.png', alt: 'Artist 3' },
        { src: '/hero/artist4.png', alt: 'Artist 4' },
    ];

    return (
        <section className="relative min-h-screen pt-64">

            {/* Background Artist Images - Light Gray Background Grid */}
            <div className="absolute inset-0 flex items-center justify-center z-0 ">
                <div className="w-full h-full">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 w-full h-full">
                        {artistImages.map((artist, idx) => (
                            <div key={idx} className="relative bg-white/10 overflow-hidden flex items-center justify-center">
                                <img
                                    src={artist.src}
                                    alt={artist.alt}
                                    className="object-contain grayscale w-full h-full scale-[2]"
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
            <div className="relative z-10 min-h-screen flex flex-col justify-end pb-8 lg:pb-16">
                <div className="container mx-auto px-6 lg:px-24">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="max-w-7xl"
                    >
                        {/* SPANISHLINGO - Lower Left */}
                        <h1 className="text-white font-grifter text-3xl lg:text-[40px] xl:text-[40px] lg:text-5xl mb-2 whitespace-nowrap">
                            SPANISHLINGO
                        </h1>

                        {/* STUDIOS - Large Red Text Overlapping Images */}
                        <h2 className="text-brand-red font-grifter text-6xl lg:text-[277px] xl:text-[277px] leading-none mb-8 whitespace-nowrap">
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

