import * as THREE from 'three'

const CONTENT_SERVER_URL = "https://media.githubusercontent.com/media/marcusm009/marcusm009.github.io/main";

class AudioManager {
    constructor(window, context=null) {
        this.window = window;
        this.loadedSound = null;

        this.context = context;
        this.listener = new THREE.AudioListener();
        this.loader = new THREE.AudioLoader();
        this.sound = new THREE.Audio(this.listener);
    }

    playSound(sound, volume=1) {
        if(this.context == null) {
            console.log('context loaded');
            this.loadContext();
        }
        if(!this.loadedSound == sound) {
            this.loadSound(sound, volume);
            console.log(`loaded sound: ${sound}`);
        }
        if(this.sound.isPlaying) {
            this.sound.stop();
        }
        this.sound.play();
    }

    stopSound() {
        this.sound.stop();
    }

    loadContext() {
        let AudioContext = window.AudioContext || window.webkitAudioContext;
        this.context = new AudioContext();
        this.context.resume().then(() => {
            console.log('Playback resumed successfully');
        });
    }

    loadSound(sound, volume=1) {
        this.loader.load(`${CONTENT_SERVER_URL}/sounds/${sound}.ogg`, (buffer) => {
            this.sound.setBuffer(buffer);
            this.sound.setLoop(false);
            this.sound.setVolume(volume);
        });
        this.loadedSound = sound;
    }
}

export default AudioManager