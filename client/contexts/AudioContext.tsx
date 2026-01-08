import { createContext, useContext, useRef, useCallback, ReactNode } from 'react';

type AudioRef = HTMLAudioElement | null;

interface AudioContextType {
    registerAudio: (id: string, audio: AudioRef) => void;
    unregisterAudio: (id: string) => void;
    playAudio: (id: string) => void;
    pauseAudio: (id: string) => void;
    pauseAll: () => void;
    isPlaying: (id: string) => boolean;
}

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
    const audioRefs = useRef<Map<string, AudioRef>>(new Map());
    const playingRefs = useRef<Set<string>>(new Set());

    const registerAudio = useCallback((id: string, audio: AudioRef) => {
        if (audio) {
            audioRefs.current.set(id, audio);
        } else {
            audioRefs.current.delete(id);
        }
    }, []);

    const unregisterAudio = useCallback((id: string) => {
        audioRefs.current.delete(id);
        playingRefs.current.delete(id);
    }, []);

    const pauseAudio = useCallback((id: string) => {
        const audio = audioRefs.current.get(id);
        if (audio) {
            audio.pause();
            playingRefs.current.delete(id);
        }
    }, []);

    const pauseAll = useCallback(() => {
        audioRefs.current.forEach((audio, id) => {
            if (audio) {
                audio.pause();
            }
        });
        playingRefs.current.clear();
    }, []);

    const playAudio = useCallback((id: string) => {
        const audio = audioRefs.current.get(id);
        if (!audio) return;

        // Pause all other audios first and reset their currentTime to prevent resume issues
        audioRefs.current.forEach((otherAudio, otherId) => {
            if (otherId !== id && otherAudio) {
                otherAudio.pause();
                // Reset currentTime to start to ensure clean state
                if (otherAudio.currentTime > 0) {
                    otherAudio.currentTime = 0;
                }
                playingRefs.current.delete(otherId);
            }
        });

        // Play the requested audio
        audio.play()
            .then(() => {
                playingRefs.current.add(id);
            })
            .catch((error) => {
                console.error('Error playing audio:', error);
                playingRefs.current.delete(id);
            });
    }, []);

    const isPlaying = useCallback((id: string) => {
        const audio = audioRefs.current.get(id);
        if (!audio) return false;
        // Check actual audio state
        return !audio.paused && audio.currentTime > 0 && !audio.ended;
    }, []);

    return (
        <AudioContext.Provider
            value={{
                registerAudio,
                unregisterAudio,
                playAudio,
                pauseAudio,
                pauseAll,
                isPlaying,
            }}
        >
            {children}
        </AudioContext.Provider>
    );
}

export function useAudio() {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error('useAudio must be used within AudioProvider');
    }
    return context;
}

