import { motion } from 'framer-motion';

export default function LetsPlaySection() {
    // Left side vinyl records in semi-circular pattern (matching screenshot)
    const leftVinylRecords = [
        { file: 'Group 58.svg', top: '30%', left: '20%', delay: 0.1, zIndex: 9, width: '79px', height: '79px', lgWidth: '79px', lgHeight: '79px', xlWidth: '79px', xlHeight: '79px' },
        { file: 'Group 68.svg', top: '34%', left: '6%', delay: 0.2, zIndex: 8, width: '71.34px', height: '71.34px', lgWidth: '71.34px', lgHeight: '71.34px', xlWidth: '71.34px', xlHeight: '71.34px' },
        { file: 'Group 71.svg', top: '44%', left: '-5%', delay: 0.3, zIndex: 7, width: '69.3px', height: '69.3px', lgWidth: '69.3px', lgHeight: '69.3px', xlWidth: '69.3px', xlHeight: '69.3px' },
        { file: 'Group 69.svg', top: '64%', left: '-3%', delay: 0.4, zIndex: 6, width: '80px', height: '80px', lgWidth: '80px', lgHeight: '80px', xlWidth: '80px', xlHeight: '80px' },
        { file: 'Group 59.svg', top: '72%', left: '11%', delay: 0.5, zIndex: 5, width: '101px', height: '101px', lgWidth: '101px', lgHeight: '101px', xlWidth: '101px', xlHeight: '101px' },
    ];

    // Right side vinyl records in semi-circular pattern (matching screenshot)
    const rightVinylRecords = [
        { file: 'Group 65.svg', top: '29%', right: '30%', delay: 0.1, zIndex: 5, width: '80px', height: '80px', lgWidth: '80px', lgHeight: '80px', xlWidth: '80px', xlHeight: '80px' },
        { file: 'Group 66.svg', top: '25%', right: '13%', delay: 0.2, zIndex: 6, width: '102px', height: '102px', lgWidth: '102px', lgHeight: '102px', xlWidth: '102px', xlHeight: '102px' },
        { file: 'Group 70.svg', top: '45%', right: '8%', delay: 0.3, zIndex: 7, width: '69.3px', height: '69.3px', lgWidth: '69.3px', lgHeight: '69.3px', xlWidth: '69.3px', xlHeight: '69.3px' },
        { file: 'Group 67.svg', top: '66%', right: '12%', delay: 0.4, zIndex: 8, width: '75.6px', height: '75.6px', lgWidth: '75.6px', lgHeight: '75.6px', xlWidth: '75.6px', xlHeight: '75.6px' },
        { file: 'Group 61.svg', top: '81%', right: '22%', delay: 0.5, zIndex: 9, width: '103px', height: '103px', lgWidth: '103px', lgHeight: '103px', xlWidth: '103px', xlHeight: '103px' },
    ];

    // Left side sound waves (positioned between records and controller)
    const leftSoundWaves = [
        { file: 'Mask group1.svg', top: '36%', left: '33%', delay: 0.15, width: '118.08px', height: '122.81px', lgWidth: '118.08px', lgHeight: '122.81px', xlWidth: '118.08px', xlHeight: '122.81px' },
        { file: 'Mask group2.svg', top: '57%', left: '27%', delay: 0.2, width: '159.88px', height: '165.14px', lgWidth: '159.88px', lgHeight: '165.14px', xlWidth: '159.88px', xlHeight: '165.14px' },
    ];

    // Right side sound waves (positioned between records and controller)
    const rightSoundWaves = [
        { file: 'Mask group3.svg', top: '36%', right: '42%', delay: 0.15, width: '113.74px', height: '118.29px', lgWidth: '113.74px', lgHeight: '118.29px', xlWidth: '113.74px', xlHeight: '118.29px' },
        { file: 'Mask group4.svg', top: '58%', right: '37%', delay: 0.2, width: '154px', height: '159.07px', lgWidth: '154px', lgHeight: '159.07px', xlWidth: '154px', xlHeight: '159.07px' },
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
                    <h2 className="text-white font-grifter text-6xl lg:text-[119.17px] xl:text-[119.17px] leading-none uppercase font-bold">
                        LET'S PLAY
                    </h2>
                </motion.div>
            </div>

            {/* DJ Controller and Vinyl Records Layout - Full Width Container */}
            <div className="relative w-full max-w-7xl mx-auto min-h-[400px] lg:min-h-[400px]">
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
                                className={`object-contain left-vinyl-${idx}`}
                                style={{
                                    width: item.width,
                                    height: item.height,
                                }}
                            />
                        </motion.div>
                    ))}
                    <style>{`
                        @media (min-width: 1024px) {
                            ${leftVinylRecords.map((item, idx) => `
                                .left-vinyl-${idx} {
                                    width: ${item.lgWidth} !important;
                                    height: ${item.lgHeight} !important;
                                }
                            `).join('')}
                        }
                        @media (min-width: 1280px) {
                            ${leftVinylRecords.map((item, idx) => `
                                .left-vinyl-${idx} {
                                    width: ${item.xlWidth} !important;
                                    height: ${item.xlHeight} !important;
                                }
                            `).join('')}
                        }
                    `}</style>
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
                            <motion.img
                                src={`/section2/${item.file}`}
                                alt={`Left Sound Wave ${idx + 1}`}
                                className={`object-contain left-sound-${idx}`}
                                style={{
                                    width: item.width,
                                    height: item.height,
                                }}
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
                    <style>{`
                        @media (min-width: 1024px) {
                            ${leftSoundWaves.map((item, idx) => `
                                .left-sound-${idx} {
                                    width: ${item.lgWidth} !important;
                                    height: ${item.lgHeight} !important;
                                }
                            `).join('')}
                        }
                        @media (min-width: 1280px) {
                            ${leftSoundWaves.map((item, idx) => `
                                .left-sound-${idx} {
                                    width: ${item.xlWidth} !important;
                                    height: ${item.xlHeight} !important;
                                }
                            `).join('')}
                        }
                    `}</style>
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
                                className={`object-contain right-vinyl-${idx}`}
                                style={{
                                    width: item.width,
                                    height: item.height,
                                }}
                            />
                        </motion.div>
                    ))}
                    <style>{`
                        @media (min-width: 1024px) {
                            ${rightVinylRecords.map((item, idx) => `
                                .right-vinyl-${idx} {
                                    width: ${item.lgWidth} !important;
                                    height: ${item.lgHeight} !important;
                                }
                            `).join('')}
                        }
                        @media (min-width: 1280px) {
                            ${rightVinylRecords.map((item, idx) => `
                                .right-vinyl-${idx} {
                                    width: ${item.xlWidth} !important;
                                    height: ${item.xlHeight} !important;
                                }
                            `).join('')}
                        }
                    `}</style>
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
                            <motion.img
                                src={`/section2/${item.file}`}
                                alt={`Right Sound Wave ${idx + 1}`}
                                className={`object-contain right-sound-${idx}`}
                                style={{
                                    width: item.width,
                                    height: item.height,
                                }}
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
                    <style>{`
                        @media (min-width: 1024px) {
                            ${rightSoundWaves.map((item, idx) => `
                                .right-sound-${idx} {
                                    width: ${item.lgWidth} !important;
                                    height: ${item.lgHeight} !important;
                                }
                            `).join('')}
                        }
                        @media (min-width: 1280px) {
                            ${rightSoundWaves.map((item, idx) => `
                                .right-sound-${idx} {
                                    width: ${item.xlWidth} !important;
                                    height: ${item.xlHeight} !important;
                                }
                            `).join('')}
                        }
                    `}</style>
                </div>

                {/* Center - DJ Controller (Perfectly Centered Between Left and Right Sections) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute z-20"
                    style={{
                        top: '15%',
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

