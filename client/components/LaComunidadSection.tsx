import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { useAudio } from '@/contexts/AudioContext';

export default function LaComunidadSection() {
    const [playingStates, setPlayingStates] = useState<boolean[]>(new Array(7).fill(false));
    const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
    const handlersRef = useRef<Array<{
        ended: () => void;
        pause: () => void;
        play: () => void;
    } | null>>([]);
    const { registerAudio, unregisterAudio, playAudio, pauseAudio, isPlaying: contextIsPlaying } = useAudio();

    // Setup event listener for sequential playback when audio element is mounted
    const setupAudioRef = (index: number) => (el: HTMLAudioElement | null) => {
        const audioId = `comunidad-audio-${index}`;

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
        if (el) {
            registerAudio(audioId, el);

            const handleEnded = () => {
                setPlayingStates(prev => {
                    const newStates = [...prev];
                    newStates[index] = false;
                    return newStates;
                });

                // Play next song if available
                if (index < 6 && audioRefs.current[index + 1]) {
                    const nextAudioId = `comunidad-audio-${index + 1}`;
                    playAudio(nextAudioId);
                    setPlayingStates(prev => {
                        const newStates = [...prev];
                        newStates[index + 1] = true;
                        return newStates;
                    });
                }
            };

            // Setup pause event listener to sync state
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

            // Setup play event listener to sync state
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

    // Sync state with context (fallback check)
    useEffect(() => {
        const checkPlaying = () => {
            audioRefs.current.forEach((audio, index) => {
                if (audio) {
                    const audioId = `comunidad-audio-${index}`;
                    const playing = contextIsPlaying(audioId);
                    setPlayingStates(prev => {
                        if (prev[index] !== playing) {
                            const newStates = [...prev];
                            newStates[index] = playing;
                            return newStates;
                        }
                        return prev;
                    });
                }
            });
        };

        // Check less frequently since we have event listeners
        const interval = setInterval(checkPlaying, 500);
        checkPlaying();

        return () => clearInterval(interval);
    }, [contextIsPlaying]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            audioRefs.current.forEach((audio, index) => {
                const handlers = handlersRef.current[index];
                if (audio && handlers) {
                    audio.removeEventListener('ended', handlers.ended);
                    audio.removeEventListener('pause', handlers.pause);
                    audio.removeEventListener('play', handlers.play);
                }
                const audioId = `comunidad-audio-${index}`;
                unregisterAudio(audioId);
            });
        };
    }, [unregisterAudio]);

    const togglePlayPause = (index: number) => {
        const audio = audioRefs.current[index];
        if (!audio) return;

        const audioId = `comunidad-audio-${index}`;
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
            // Reset all other states first
            setPlayingStates(prev => {
                const newStates = prev.map(() => false);
                return newStates;
            });

            // Play selected audio (context will pause all others including LaOportunidadSection)
            playAudio(audioId);
            setPlayingStates(prev => {
                const newStates = [...prev];
                newStates[index] = true;
                return newStates;
            });
        }
    };

    const communityImages = [
        { img: '/section5/img1.svg', delay: 0.1, width: '727.84px', height: '484.59px', rotate: 1.64 },
        { img: '/section5/img2.svg', delay: 0.2, width: '602.93px', height: '541.92px', rotate: 1.55 },
        { img: '/section5/img3.svg', delay: 0.3, width: '806.28px', height: '542.1px', rotate: 1.6 },
        { img: '/section5/img4.svg', delay: 0.4, width: '806px', height: '541.92px', rotate: 1.55 },
        { img: '/section5/img5.svg', delay: 0.5, width: '806.28px', height: '542.1px', rotate: 1.6 },
        { img: '/section5/img6.svg', delay: 0.6, width: '727.84px', height: '484.59px', rotate: 1.64 },
        { img: '/section5/img7.svg', delay: 0.7, width: '806.28px', height: '542.1px', rotate: 1.6 },
    ];

    return (
        <section className="relative py-20 lg:py-32 bg-black overflow-hidden">
            {/* Hidden audio elements */}
            {[1, 2, 3, 4, 5, 6, 7].map((songNum, idx) => (
                <audio
                    key={idx}
                    ref={setupAudioRef(idx)}
                    src={`/section4/music/song${songNum}.mp3`}
                    preload="metadata"
                />
            ))}

            <div className="container mx-auto px-6 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-white font-grifter text-5xl lg:text-[155px] leading-none uppercase">
                        La Comunidad
                    </h2>
                </motion.div>

                {/* Community Images - Vertical Column, Centered */}
                <div className="flex flex-col items-center" style={{ gap: '200px' }}>
                    {communityImages.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            viewport={{ once: true }}
                            className="relative group"
                            style={{
                                transform: `rotate(${item.rotate}deg)`,
                                width: item.width,
                                height: item.height,
                            }}
                        >
                            <div className="relative overflow-hidden w-full h-full">
                                <img
                                    src={item.img}
                                    alt={`Community ${idx + 1}`}
                                    className="w-full h-full object-cover grayscale"
                                    style={{
                                        width: item.width,
                                        height: item.height,
                                    }}
                                />
                                {/* Play/Pause Button - Position varies by image */}
                                <div className={`absolute z-20 ${idx === 4
                                    ? 'right-4 top-1/2 -translate-y-1/2' // Image 5: right vertical center
                                    : idx === 6
                                        ? 'bottom-4 right-4' // Image 7: right bottom
                                        : 'bottom-4 left-1/2 -translate-x-1/2' // Others: bottom center
                                    }`}>
                                    <motion.button
                                        onClick={() => togglePlayPause(idx)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center justify-center transition-transform bg-brand-red rounded-full p-3"
                                    >
                                        {playingStates[idx] ? (
                                            <Pause className="w-8 h-8 text-white" fill="white" />
                                        ) : (
                                            <Play className="w-8 h-8 text-white" fill="white" />
                                        )}
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

