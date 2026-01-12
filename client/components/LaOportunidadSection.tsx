import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { useAudio } from '@/contexts/AudioContext';

const AUDIO_ID = 'oportunidad-audio';

export default function LaOportunidadSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const handlersRef = useRef<{
        ended: () => void;
        pause: () => void;
        play: () => void;
    } | null>(null);
    const { registerAudio, unregisterAudio, playAudio, pauseAudio, isPlaying: contextIsPlaying } = useAudio();

    // Setup audio ref and register with context
    const setupAudioRef = (el: HTMLAudioElement | null) => {
        // Clean up previous listener if exists
        const prevAudio = audioRef.current;
        const prevHandlers = handlersRef.current;
        if (prevAudio && prevHandlers) {
            prevAudio.removeEventListener('ended', prevHandlers.ended);
            prevAudio.removeEventListener('pause', prevHandlers.pause);
            prevAudio.removeEventListener('play', prevHandlers.play);
        }

        audioRef.current = el;

        if (el) {
            // Register with audio context
            registerAudio(AUDIO_ID, el);

            // Setup ended event listener
            const handleEnded = () => {
                setIsPlaying(false);
            };

            // Setup pause event listener to sync state
            const handlePause = () => {
                setIsPlaying(false);
            };

            // Setup play event listener to sync state
            const handlePlay = () => {
                setIsPlaying(true);
            };

            el.addEventListener('ended', handleEnded);
            el.addEventListener('pause', handlePause);
            el.addEventListener('play', handlePlay);
            handlersRef.current = { ended: handleEnded, pause: handlePause, play: handlePlay };
        } else {
            unregisterAudio(AUDIO_ID);
            handlersRef.current = null;
        }
    };

    // Sync state with context (fallback check)
    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const checkPlaying = () => {
                const playing = contextIsPlaying(AUDIO_ID);
                setIsPlaying(playing);
            };

            // Check less frequently since we have event listeners
            const interval = setInterval(checkPlaying, 500);
            checkPlaying();

            return () => clearInterval(interval);
        }
    }, [contextIsPlaying]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            const audio = audioRef.current;
            const handlers = handlersRef.current;
            if (audio && handlers) {
                audio.removeEventListener('ended', handlers.ended);
                audio.removeEventListener('pause', handlers.pause);
                audio.removeEventListener('play', handlers.play);
            }
            unregisterAudio(AUDIO_ID);
        };
    }, [unregisterAudio]);

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (!audio) return;

        const isCurrentlyPlaying = isPlaying || (!audio.paused && audio.currentTime > 0);

        if (isCurrentlyPlaying) {
            // Pause current audio
            pauseAudio(AUDIO_ID);
            // Reset to beginning for clean state
            audio.currentTime = 0;
            setIsPlaying(false);
        } else {
            // Play this audio (context will pause all others)
            playAudio(AUDIO_ID);
            setIsPlaying(true);
        }
    };

    return (
        <section id="opportunities" className="relative py-20 lg:py-32 bg-black overflow-hidden">
            {/* Hidden audio element */}
            <audio
                ref={setupAudioRef}
                src="/music/1.mp3"
                preload="metadata"
            />

            <div className="container mx-auto px-6 lg:px-24">
                <div className="relative">
                    {/* Left Side - Text (can overlap with image) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative z-10 la-oportunidad-left"
                    >
                        <h2 className="la-oportunidad-heading mb-8">
                            <span className="whitespace-nowrap block">LA</span>
                            <span className="flex lg:block">
                                <span className="text-brand-red stroke-text whitespace-nowrap lg:block">OPORT</span>
                                <span className="text-brand-red stroke-text whitespace-nowrap lg:block">UNIDAD</span>
                            </span>
                        </h2>
                    </motion.div>

                    {/* Right Side - Text and Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative lg:absolute lg:right-0 lg:top-0 lg:w-1/2"
                    >
                        {/* Descriptive Text */}
                        <p className="la-oportunidad-description mb-8">
                            To introduce Punjabi music, beats, and culture to Latin American world / audiences who are hungry for new, global sounds as rhythmic & energetic as Punjabi Music.
                        </p>

                        {/* Image with Play Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="relative group la-oportunidad-image-container"
                        >
                            <div className="la-oportunidad-image-wrapper">
                                <img
                                    src="/section4/img1.svg"
                                    alt="La Oportunidad"
                                    className="la-oportunidad-image object-cover grayscale"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Play/Pause Button Overlay */}
                                <div className="la-oportunidad-play-button la-oportunidad-play-button-up">
                                    <motion.button
                                        onClick={togglePlayPause}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center justify-center transition-transform shadow-lg bg-brand-red rounded-full p-3"
                                    >
                                        {isPlaying ? (
                                            <Pause className="w-8 h-8 text-white" fill="white" />
                                        ) : (
                                            <Play className="w-8 h-8 text-white" fill="white" />
                                        )}
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

