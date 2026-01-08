// Shared audio manager to ensure only one audio plays at a time across components

type AudioRef = HTMLAudioElement | null;

class AudioManager {
    private comunidadAudios: AudioRef[] = [];
    private oportunidadAudio: AudioRef | null = null;

    registerComunidadAudio(index: number, audio: AudioRef) {
        this.comunidadAudios[index] = audio;
    }

    registerOportunidadAudio(audio: AudioRef) {
        this.oportunidadAudio = audio;
    }

    pauseAllComunidad() {
        this.comunidadAudios.forEach((audio) => {
            if (audio && !audio.paused) {
                audio.pause();
            }
        });
    }

    pauseOportunidad() {
        if (this.oportunidadAudio && !this.oportunidadAudio.paused) {
            this.oportunidadAudio.pause();
        }
    }

    pauseAll() {
        this.pauseAllComunidad();
        this.pauseOportunidad();
    }
}

export const audioManager = new AudioManager();

