import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { useAudio } from '@/contexts/AudioContext';

export default function LetsPlaySection() {
    // Audio files available (8 total, will cycle for 10 vinyl records)
    const audioFiles = ['1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3', '6.mp3', '7.mp3', '8.mp3'];

    // Left side vinyl records - simplified (positioning in CSS)
    const leftVinylRecords = [
        { file: 'Group 58.svg', delay: 0.1, className: 'lets-play-vinyl-left-1', audioFile: audioFiles[0] },
        { file: 'Group 68.svg', delay: 0.2, className: 'lets-play-vinyl-left-2', audioFile: audioFiles[1] },
        { file: 'Group 71.svg', delay: 0.3, className: 'lets-play-vinyl-left-3', audioFile: audioFiles[2] },
        { file: 'Group 69.svg', delay: 0.4, className: 'lets-play-vinyl-left-4', audioFile: audioFiles[3] },
        { file: 'Group 59.svg', delay: 0.5, className: 'lets-play-vinyl-left-5', audioFile: audioFiles[4] },
    ];

    // Right side vinyl records - simplified (positioning in CSS)
    const rightVinylRecords = [
        { file: 'Group 65.svg', delay: 0.1, className: 'lets-play-vinyl-right-1', audioFile: audioFiles[5] },
        { file: 'Group 66.svg', delay: 0.2, className: 'lets-play-vinyl-right-2', audioFile: audioFiles[6] },
        { file: 'Group 70.svg', delay: 0.3, className: 'lets-play-vinyl-right-3', audioFile: audioFiles[7] },
        { file: 'Group 67.svg', delay: 0.4, className: 'lets-play-vinyl-right-4', audioFile: audioFiles[0] },
        { file: 'Group 61.svg', delay: 0.5, className: 'lets-play-vinyl-right-5', audioFile: audioFiles[1] },
    ];

    // Combine all vinyl records for easier state management
    const allVinylRecords = [
        ...leftVinylRecords.map((item, idx) => ({ ...item, side: 'left', index: idx })),
        ...rightVinylRecords.map((item, idx) => ({ ...item, side: 'right', index: idx + 5 })),
    ];

    const [playingStates, setPlayingStates] = useState<boolean[]>(new Array(10).fill(false));
    const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
    const handlersRef = useRef<Array<{
        ended: () => void;
        pause: () => void;
        play: () => void;
    } | null>>([]);
    const { registerAudio, unregisterAudio, playAudio, pauseAudio, isPlaying: contextIsPlaying } = useAudio();

    // Setup audio refs and event listeners
    const setupAudioRef = (index: number) => (el: HTMLAudioElement | null) => {
        const audioId = `lets-play-audio-${index}`;
        const record = allVinylRecords[index];

        // Clean up previous listener if exists
        const prevAudio = audioRefs.current[index];
        const prevHandlers = handlersRef.current[index];
        if (prevAudio && prevHandlers) {
            prevAudio.removeEventListener('ended', prevHandlers.ended);
            prevAudio.removeEventListener('pause', prevHandlers.pause);
            prevAudio.removeEventListener('play', prevHandlers.play);
        }

        audioRefs.current[index] = el;

        // Register with audio context
        if (el && record) {
            registerAudio(audioId, el);

            const handleEnded = () => {
                setPlayingStates(prev => {
                    const newStates = [...prev];
                    newStates[index] = false;
                    return newStates;
                });
            };

            const handlePause = () => {
                setPlayingStates(prev => {
                    if (prev[index]) {
                        const newStates = [...prev];
                        newStates[index] = false;
                        return newStates;
                    }
                    return prev;
                });
            };

            const handlePlay = () => {
                setPlayingStates(prev => {
                    if (!prev[index]) {
                        const newStates = [...prev];
                        newStates[index] = true;
                        return newStates;
                    }
                    return prev;
                });
            };

            el.addEventListener('ended', handleEnded);
            el.addEventListener('pause', handlePause);
            el.addEventListener('play', handlePlay);
            handlersRef.current[index] = { ended: handleEnded, pause: handlePause, play: handlePlay };
        } else {
            unregisterAudio(audioId);
            handlersRef.current[index] = null;
        }
    };

    // Sync playing states with audio context
    useEffect(() => {
        const checkPlaying = () => {
            allVinylRecords.forEach((_, index) => {
                const audioId = `lets-play-audio-${index}`;
                const playing = contextIsPlaying(audioId);
                setPlayingStates(prev => {
                    if (prev[index] !== playing) {
                        const newStates = [...prev];
                        newStates[index] = playing;
                        return newStates;
                    }
                    return prev;
                });
            });
        };

        const interval = setInterval(checkPlaying, 500);
        checkPlaying();

        return () => clearInterval(interval);
    }, [contextIsPlaying]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            allVinylRecords.forEach((_, index) => {
                const audioId = `lets-play-audio-${index}`;
                const audio = audioRefs.current[index];
                const handlers = handlersRef.current[index];
                if (audio && handlers) {
                    audio.removeEventListener('ended', handlers.ended);
                    audio.removeEventListener('pause', handlers.pause);
                    audio.removeEventListener('play', handlers.play);
                }
                unregisterAudio(audioId);
            });
        };
    }, []);

    const togglePlayPause = (index: number) => {
        const audioId = `lets-play-audio-${index}`;
        const audio = audioRefs.current[index];
        if (!audio) return;

        const isCurrentlyPlaying = playingStates[index] || (!audio.paused && audio.currentTime > 0);

        if (isCurrentlyPlaying) {
            // Pause current audio
            pauseAudio(audioId);
            // Reset to beginning for clean state
            audio.currentTime = 0;
            setPlayingStates(prev => {
                const newStates = [...prev];
                newStates[index] = false;
                return newStates;
            });
        } else {
            // Play selected audio (context will pause all others)
            playAudio(audioId);
            setPlayingStates(prev => {
                const newStates = [...prev];
                newStates[index] = true;
                return newStates;
            });
        }
    };

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
        <section id="mixes" className="lets-play-section">
            <div className="lets-play-container">
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
            <div className="lets-play-main-wrapper">
                {/* Hidden audio elements */}
                {allVinylRecords.map((record, idx) => (
                    <audio
                        key={idx}
                        ref={setupAudioRef(idx)}
                        src={`/music/${record.audioFile}`}
                        preload="metadata"
                    />
                ))}

                {/* Left Side - 5 Vinyl Records in Semi-Circular Pattern */}
                <div className="lets-play-left-vinyl-container">
                    {leftVinylRecords.map((item, idx) => {
                        const globalIndex = idx;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.5, x: -50 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: item.delay }}
                                viewport={{ once: true }}
                                className={item.className}
                            >
                                <div className="relative w-full h-full">
                                    <motion.img
                                        src={`/section2/${item.file}`}
                                        alt={`Left Vinyl ${idx + 1}`}
                                        className="object-contain w-full h-full"
                                        loading="lazy"
                                        decoding="async"
                                        animate={{
                                            rotate: playingStates[globalIndex] ? 360 : 0,
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: playingStates[globalIndex] ? Infinity : 0,
                                            ease: "linear",
                                        }}
                                    />
                                    {/* Play/Pause Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                                        <motion.button
                                            onClick={() => togglePlayPause(globalIndex)}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center justify-center transition-transform bg-brand-red rounded-full p-1.5 md:p-2 shadow-lg pointer-events-auto"
                                        >
                                            {playingStates[globalIndex] ? (
                                                <Pause className="w-2 h-2 md:w-2 md:h-2 text-white" fill="white" />
                                            ) : (
                                                <Play className="w-2 h-2 md:w-2 md:h-2 text-white" fill="white" />
                                            )}
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Left Side - Sound Waves */}
                <div className="lets-play-left-sound-container">
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
                <div className="lets-play-right-vinyl-container">
                    {rightVinylRecords.map((item, idx) => {
                        const globalIndex = idx + 5;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.5, x: 50 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: item.delay }}
                                viewport={{ once: true }}
                                className={item.className}
                            >
                                <div className="relative w-full h-full">
                                    <motion.img
                                        src={`/section2/${item.file}`}
                                        alt={`Right Vinyl ${idx + 1}`}
                                        className="object-contain w-full h-full"
                                        loading="lazy"
                                        decoding="async"
                                        animate={{
                                            rotate: playingStates[globalIndex] ? 360 : 0,
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: playingStates[globalIndex] ? Infinity : 0,
                                            ease: "linear",
                                        }}
                                    />
                                    {/* Play/Pause Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                                        <motion.button
                                            onClick={() => togglePlayPause(globalIndex)}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center justify-center transition-transform bg-brand-red rounded-full p-1.5 md:p-2 shadow-lg pointer-events-auto"
                                        >
                                            {playingStates[globalIndex] ? (
                                                <Pause className="w-2 h-2 md:w-2 md:h-2 text-white" fill="white" />
                                            ) : (
                                                <Play className="w-2 h-2 md:w-2 md:h-2 text-white" fill="white" />
                                            )}
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Right Side - Sound Waves */}
                <div className="lets-play-right-sound-container">
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

