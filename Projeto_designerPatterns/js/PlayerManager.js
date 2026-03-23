class PlayerManager{

static #instance

constructor(){

    if(PlayerManager.#instance){

        PlayerManager.#instance;

    }
    this.health = 200;
    PlayerManager.#instance = this;

}


ressuscitate(){
    this.health = 200;
}

static instance(){

    if(!PlayerManager.#instance){

        PlayerManager.#instance = new PlayerManager;
    }
    return PlayerManager.#instance;

}

}