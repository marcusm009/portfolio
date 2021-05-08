import * as THREE from 'three'

class AudioManager {
    constructor(window, baseRoute, context=null) {
        this.window = window
        this.loadedSound = null
        this.baseRoute = baseRoute

        this.context = context
        this.listener = new THREE.AudioListener()
        this.loader = new THREE.AudioLoader()
        this.sounds = {}
    }

    playSound(sound, idx='rand', volume='rand', volMin=.2, volMax=.4) {
        const randIdx = (max) => Math.floor(Math.random() * max)
        const randVol = (min, max) => Math.random() * (max - min) + min

        if(!(sound in this.sounds)) {
            console.log(`Sound: ${sound} -- not loaded!`)
            return
        }
        if(this.context === null) {
            console.log('context loaded')
            this.loadContext()
        }
        for(let s of this.sounds[sound]) {
            if(s.isPlaying) {
                s.stop()
            }
        }
        
        if(idx === 'rand')
            idx = randIdx(this.sounds[sound].length)

        if(volume === 'rand')
            volume = randVol(volMin, volMax)

        this.sounds[sound][idx].setVolume(volume)
        this.sounds[sound][idx].play()
    }

    loadContext() {
        let AudioContext = window.AudioContext || window.webkitAudioContext
        this.context = new AudioContext()
        this.context.resume().then(() => {
            console.log('Playback resumed successfully')
        })
    }

    loadSound(sound, numSounds) {
        this.sounds[sound] = []
        for(let i = 0; i < numSounds; i++) {
            this.sounds[sound].push(new THREE.Audio(this.listener))
            this.loader.load(`${this.baseRoute}/sounds/${sound}/${i}.ogg`, (buffer) => {
                this.sounds[sound][i].setBuffer(buffer)
                this.sounds[sound][i].setLoop(false)
                this.sounds[sound][i].setVolume(1)
            })
        }  
      
    }
}

export default AudioManager