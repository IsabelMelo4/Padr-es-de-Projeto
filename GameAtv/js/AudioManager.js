
// Classe responsável por controlar todos os áudios do jogo
class AudioManager{

      // static = pertence à classe inteira
    // # = privado (ninguém de fora pode mexer)
static #instance;

  // O construtor é chamado quando alguém tenta criar um novo AudioManager
constructor(){
     // Se já existir um no jogo
    if(AudioManager.#instance) {

        // Não criamos outro 
        // Apenas devolvemos o que já estava trabalhando
        AudioManager.#instance;
    }

    this.audioAttack = new Audio("audio/ryu_hadouken.mp3");
    this.audioWinner = new Audio("audio/ryuWinner.mp3")
    this.audioBackground = new Audio("audio/audioBackground.mp3");
    this.audioBackground.loop = true;
           // Agora registramos que este é o audio oficial do jogo
    AudioManager.#instance = this;
}

playBackground(){
 
    this.audioBackground.play();

}

playAttack(){
    this.audioAttack.play();

}

playWinner(){
this.audioWinner.play();
}
 // Método estático usado para pedir o AudioManager do jogo
static instance(){

        // Se ainda não existe 

    if(!AudioManager.#instance){

         // Criamos um novo
        AudioManager.#instance = new AudioManager;
      
    }
     // Entregamos para quem pediu
    return AudioManager.#instance;

}


}