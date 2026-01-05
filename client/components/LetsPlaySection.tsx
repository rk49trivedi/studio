import { motion } from 'framer-motion';

export default function LetsPlaySection() {
    // Left side vinyl records in semi-circular pattern (matching screenshot)
    const leftVinylRecords = [
        { file: 'Group 58.svg', top: '12%', left: '8%', delay: 0.1, zIndex: 9, size: 'w-20 h-20 lg:w-28 lg:h-28 xl:w-36 xl:h-36' },
        { file: 'Group 68.svg', top: '18%', left: '4%', delay: 0.2, zIndex: 8, size: 'w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40' },
        { file: 'Group 71.svg', top: '26%', left: '2%', delay: 0.3, zIndex: 7, size: 'w-28 h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44' },
        { file: 'Group 69.svg', top: '36%', left: '4%', delay: 0.4, zIndex: 6, size: 'w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40' },
        { file: 'Group 59.svg', top: '48%', left: '8%', delay: 0.5, zIndex: 5, size: 'w-20 h-20 lg:w-28 lg:h-28 xl:w-36 xl:h-36' },
    ];

    // Right side vinyl records in semi-circular pattern (matching screenshot)
    const rightVinylRecords = [
        { file: 'Group 65.svg', top: '48%', right: '8%', delay: 0.1, zIndex: 5, size: 'w-20 h-20 lg:w-28 lg:h-28 xl:w-36 xl:h-36' },
        { file: 'Group 66.svg', top: '36%', right: '4%', delay: 0.2, zIndex: 6, size: 'w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40' },
        { file: 'Group 70.svg', top: '26%', right: '2%', delay: 0.3, zIndex: 7, size: 'w-28 h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44' },
        { file: 'Group 67.svg', top: '18%', right: '4%', delay: 0.4, zIndex: 8, size: 'w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40' },
        { file: 'Group 61.svg', top: '12%', right: '8%', delay: 0.5, zIndex: 9, size: 'w-20 h-20 lg:w-28 lg:h-28 xl:w-36 xl:h-36' },
    ];

    // Left side sound waves (positioned between records and controller)
    const leftSoundWaves = [
        { file: 'Mask group1.svg', top: '30%', left: '30%', delay: 0.15, size: 'w-18 h-18 lg:w-18 lg:h-18 xl:w-22 xl:h-22' },
        { file: 'Mask group2.svg', top: '38%', left: '25%', delay: 0.2, size: 'w-18 h-18 lg:w-22 lg:h-22 xl:w-26 xl:h-26' },
    ];

    // Right side sound waves (positioned between records and controller)
    const rightSoundWaves = [
        { file: 'Mask group3.svg', top: '30%', right: '31%', delay: 0.15, size: 'w-18 h-18 lg:w-22 lg:h-22 xl:w-26 xl:h-26' },
        { file: 'Mask group4.svg', top: '38%', right: '32%', delay: 0.2, size: 'w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28' },
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
                    className="text-center mb-16 lg:mb-24"
                >
                    <h2 className="text-white font-grifter text-6xl lg:text-[150px] xl:text-[180px] leading-none uppercase font-bold">
                        LET'S PLAY
                    </h2>
                </motion.div>
            </div>

            {/* DJ Controller and Vinyl Records Layout - Full Width Container */}
            <div className="relative w-full max-w-7xl mx-auto min-h-[600px] lg:min-h-[1000px]">
                {/* Left Side - 5 Vinyl Records in Semi-Circular Pattern */}
                <div className="hidden lg:block absolute left-0 top-0 w-1/2 h-full">
                    {leftVinylRecords.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5, x: -50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            viewport={{ once: true }}
                            className="absolute"
                            style={{
                                top: item.top,
                                left: item.left,
                                zIndex: item.zIndex,
                            }}
                        >
                            <img
                                src={`/section2/${item.file}`}
                                alt={`Left Vinyl ${idx + 1}`}
                                className={`${item.size} object-contain`}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Left Side - Sound Waves */}
                <div className="hidden lg:block absolute left-0 top-0 w-1/2 h-full">
                    {leftSoundWaves.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5, x: -30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            viewport={{ once: true }}
                            className="absolute"
                            style={{
                                top: item.top,
                                left: item.left,
                                zIndex: 15,
                            }}
                        >
                            <img
                                src={`/section2/${item.file}`}
                                alt={`Left Sound Wave ${idx + 1}`}
                                className={`${item.size} object-contain`}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Right Side - 5 Vinyl Records in Semi-Circular Pattern */}
                <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full">
                    {rightVinylRecords.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5, x: 50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            viewport={{ once: true }}
                            className="absolute"
                            style={{
                                top: item.top,
                                right: item.right,
                                zIndex: item.zIndex,
                            }}
                        >
                            <img
                                src={`/section2/${item.file}`}
                                alt={`Right Vinyl ${idx + 1}`}
                                className={`${item.size} object-contain`}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Right Side - Sound Waves */}
                <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full">
                    {rightSoundWaves.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5, x: 30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            viewport={{ once: true }}
                            className="absolute"
                            style={{
                                top: item.top,
                                right: item.right,
                                zIndex: 15,
                            }}
                        >
                            <img
                                src={`/section2/${item.file}`}
                                alt={`Right Sound Wave ${idx + 1}`}
                                className={`${item.size} object-contain`}
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
                    className="absolute z-20"
                    style={{
                        top: '20%',
                        left: '24%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <div className="relative">
                        {/* DJ Controller Base Image */}
                        <img
                            src="/section2/DJController.svg"
                            alt="DJ Controller"
                            className="w-full max-w-md lg:max-w-2xl xl:max-w-4xl h-auto object-contain relative z-10"
                        />

                        {/* Rotating Cassette 1 - Over DJ Controller (Left Side) */}
                        <motion.div
                            className="absolute flex items-center justify-center z-30 pointer-events-none"
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                top: '40.5%',
                                left: '0.2%',
                                width: '36%',
                                height: '36%',
                            }}
                        >
                            <img
                                src="/section2/contrler_cacet2.svg"
                                alt="Cassette 2"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>

                        {/* Rotating Cassette 2 - Over DJ Controller (Right Side) */}
                        <motion.div
                            className="absolute flex items-center justify-center z-30 pointer-events-none"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                top: '36%',
                                left: '63.5%',
                                width: '36%',
                                height: '36%',
                            }}
                        >
                            <img
                                src="/section2/contrler_cacet1.svg"
                                alt="Cassette 1"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>


                    </div>
                </motion.div>

                {/* Mobile View - Stacked Layout */}
                <div className="lg:hidden mt-12 flex flex-col items-center gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="/section2/DJController.svg"
                            alt="DJ Controller"
                            className="w-full max-w-xs h-auto object-contain"
                        />
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            'Mask group1.svg',
                            'Mask group2.svg',
                            'Mask group3.svg',
                            'Mask group4.svg',
                            'Group 58.svg',
                            'Group 59.svg',
                            'Group 61.svg',
                            'Group 65.svg',
                            'Group 66.svg',
                            'Group 67.svg',
                            'Group 68.svg',
                            'Group 69.svg',
                            'Group 70.svg',
                            'Group 71.svg',
                        ].map((file, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={`/section2/${file}`}
                                    alt={`Vinyl ${idx + 1}`}
                                    className="w-16 h-16 object-contain"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

