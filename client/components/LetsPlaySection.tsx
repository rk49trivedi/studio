import { motion } from 'framer-motion';

export default function LetsPlaySection() {
    // Left side vinyl records - simplified (positioning in CSS)
    const leftVinylRecords = [
        { file: 'Group 58.svg', delay: 0.1, className: 'lets-play-vinyl-left-1' },
        { file: 'Group 68.svg', delay: 0.2, className: 'lets-play-vinyl-left-2' },
        { file: 'Group 71.svg', delay: 0.3, className: 'lets-play-vinyl-left-3' },
        { file: 'Group 69.svg', delay: 0.4, className: 'lets-play-vinyl-left-4' },
        { file: 'Group 59.svg', delay: 0.5, className: 'lets-play-vinyl-left-5' },
    ];

    // Right side vinyl records - simplified (positioning in CSS)
    const rightVinylRecords = [
        { file: 'Group 65.svg', delay: 0.1, className: 'lets-play-vinyl-right-1' },
        { file: 'Group 66.svg', delay: 0.2, className: 'lets-play-vinyl-right-2' },
        { file: 'Group 70.svg', delay: 0.3, className: 'lets-play-vinyl-right-3' },
        { file: 'Group 67.svg', delay: 0.4, className: 'lets-play-vinyl-right-4' },
        { file: 'Group 61.svg', delay: 0.5, className: 'lets-play-vinyl-right-5' },
    ];

    // Left side sound waves - simplified (positioning in CSS)
    const leftSoundWaves = [
        { file: 'Mask group1.svg', delay: 0.15, className: 'lets-play-sound-left-1' },
        { file: 'Mask group2.svg', delay: 0.2, className: 'lets-play-sound-left-2' },
    ];

    // Right side sound waves - simplified (positioning in CSS)
    const rightSoundWaves = [
        { file: 'Mask group3.svg', delay: 0.15, className: 'lets-play-sound-right-1' },
        { file: 'Mask group4.svg', delay: 0.2, className: 'lets-play-sound-right-2' },
    ];

    // Equalizer bars configuration - positioned on DJ Controller
    const equalizerBars = [
        { className: 'lets-play-equalizer-bar-1', delay: 0, minHeight: 8, maxHeight: 40, duration: 2.0 },
        { className: 'lets-play-equalizer-bar-2', delay: 0.3, minHeight: 12, maxHeight: 50, duration: 1.8 },
        { className: 'lets-play-equalizer-bar-3', delay: 0.5, minHeight: 10, maxHeight: 45, duration: 2.2 },
        { className: 'lets-play-equalizer-bar-4', delay: 0.4, minHeight: 15, maxHeight: 55, duration: 1.9 },
        { className: 'lets-play-equalizer-bar-5', delay: 0.6, minHeight: 8, maxHeight: 38, duration: 2.1 },
        { className: 'lets-play-equalizer-bar-6', delay: 0.7, minHeight: 12, maxHeight: 48, duration: 2.0 },
    ];

    return (
        <section id="mixes" className="relative py-20 lg:py-32 bg-black overflow-hidden">
            <div className="container mx-auto px-6 lg:px-24">
                {/* Heading - Large White Text at Top */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="lets-play-heading">
                        LET'S PLAY
                    </h2>
                </motion.div>
            </div>

            {/* DJ Controller and Vinyl Records Layout - Full Width Container */}
            <div className="relative w-full max-w-7xl mx-auto min-h-[400px] lg:min-h-[400px]">
                {/* Left Side - 5 Vinyl Records in Semi-Circular Pattern */}
                <div className=" lg:block absolute left-0 top-0 w-1/2 h-full">
                    {leftVinylRecords.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5, x: -50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            viewport={{ once: true }}
                            className={item.className}
                        >
                            <img
                                src={`/section2/${item.file}`}
                                alt={`Left Vinyl ${idx + 1}`}
                                className="object-contain w-full h-full"
                                loading="lazy"
                                decoding="async"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Left Side - Sound Waves */}
                <div className=" lg:block absolute left-0 top-0 w-1/2 h-full">
                    {leftSoundWaves.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5, x: -30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            viewport={{ once: true }}
                            className={item.className}
                        >
                            <motion.img
                                src={`/section2/${item.file}`}
                                alt={`Left Sound Wave ${idx + 1}`}
                                className="object-contain w-full h-full"
                                loading="lazy"
                                decoding="async"
                                animate={{
                                    scale: [1, 1.15, 1],
                                    opacity: [0.7, 1, 0.7],
                                }}
                                transition={{
                                    duration: 2 + idx * 0.3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: idx * 0.4,
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Right Side - 5 Vinyl Records in Semi-Circular Pattern */}
                <div className=" lg:block absolute right-0 top-0 w-1/2 h-full">
                    {rightVinylRecords.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5, x: 50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            viewport={{ once: true }}
                            className={item.className}
                        >
                            <img
                                src={`/section2/${item.file}`}
                                alt={`Right Vinyl ${idx + 1}`}
                                className="object-contain w-full h-full"
                                loading="lazy"
                                decoding="async"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Right Side - Sound Waves */}
                <div className=" lg:block absolute right-0 top-0 w-1/2 h-full">
                    {rightSoundWaves.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5, x: 30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            viewport={{ once: true }}
                            className={item.className}
                        >
                            <motion.img
                                src={`/section2/${item.file}`}
                                alt={`Right Sound Wave ${idx + 1}`}
                                className="object-contain w-full h-full"
                                loading="lazy"
                                decoding="async"
                                animate={{
                                    scale: [1, 1.15, 1],
                                    opacity: [0.7, 1, 0.7],
                                }}
                                transition={{
                                    duration: 2 + idx * 0.3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: idx * 0.4,
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Center - DJ Controller (Perfectly Centered Between Left and Right Sections) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="lets-play-dj-controller-container"
                >
                    <div className="relative">
                        {/* DJ Controller Base Image */}
                        <img
                            src="/section2/DJController.svg"
                            alt="DJ Controller"
                            className="lets-play-dj-controller-image"
                            loading="lazy"
                            decoding="async"
                        />

                        {/* Rotating Cassette 1 - Over DJ Controller (Left Side) */}
                        <motion.div
                            className="lets-play-cassette-1"
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            <img
                                src="/section2/contrler_cacet2.svg"
                                alt="Cassette 2"
                                className="lets-play-cassette-image"
                                loading="lazy"
                                decoding="async"
                            />
                        </motion.div>

                        {/* Rotating Cassette 2 - Over DJ Controller (Right Side) */}
                        <motion.div
                            className="lets-play-cassette-2"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            <img
                                src="/section2/contrler_cacet1.svg"
                                alt="Cassette 1"
                                className="lets-play-cassette-image"
                                loading="lazy"
                                decoding="async"
                            />
                        </motion.div>

                        {/* Equalizer Bars - Animated Music Visualizer */}
                        <div className="equalizer-bars-container">
                            {equalizerBars.map((bar, idx) => (
                                <motion.div
                                    key={idx}
                                    className={`lets-play-equalizer-bar ${bar.className}`}
                                    animate={{
                                        height: [
                                            `${bar.minHeight}%`,
                                            `${bar.maxHeight}%`,
                                            `${bar.minHeight + (bar.maxHeight - bar.minHeight) * 0.3}%`,
                                            `${bar.maxHeight}%`,
                                            `${bar.minHeight}%`,
                                        ],
                                    }}
                                    transition={{
                                        duration: bar.duration,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: bar.delay,
                                    }}
                                />
                            ))}
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}

