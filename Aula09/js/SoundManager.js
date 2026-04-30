class SoundManager {

    static #instance;

    constructor() {

        if(SoundManager.#instance) return SoundManager.#instance;

        this.screamAudio = new Audio("audio/scream.mp3");
        this.deathAudio = new Audio("audio/death.mp3");
        this.playRessuscitate = new  Audio("audio/ressusitate.mp3")


        
        SoundManager.#instance = this;
        
    }
 
    playScream() {
        this.screamAudio.play();
    }

    playDeath() {
        this.deathAudio.play();
    }

     playRessuscitate() {
        this.playRessuscitate.play();
    }


    receiverEvent(Event){

        if(event.type == Event.DEATH_EVENT){
            this.playDeath();
        }

          if(event.type == Event.RESSUSCITATE_EVENT){
            this.playRessusitate();
        }

        
          if(event.type == Event.DAMAGE_EVENT){
            this.playScream();
        }
    }

    static instance() {
        if (!SoundManager.#instance) SoundManager.#instance = new SoundManager();
        return SoundManager.#instance;
    }

} 