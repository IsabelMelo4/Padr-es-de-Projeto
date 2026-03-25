class SoundManager {

    static #instance;

    constructor() {

        if(SoundManager.#instance) return SoundManager.#instance;

        this.screamAudio = new Audio("audio/scream.mp3");
        this.deathAudio = new Audio("audio/death.mp3");

        SoundManager.#instance = this;
        
    }
 
    playScream() {
        this.screamAudio.play();
    }

    playDeath() {
        this.deathAudio.play();
    }

    static instance() {
        if (!SoundManager.#instance) SoundManager.#instance = new SoundManager();
        return SoundManager.#instance;
    }

}