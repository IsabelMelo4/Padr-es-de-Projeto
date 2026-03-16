class EnemyManager{

static #instance

    constructor(){
        if(EnemyManager.#instance){
            return EnemyManager.#instance

        }

        this.health = 200;
        EnemyManager.#instance = this;

    }

    static instance(){
        if(!EnemyManager.#instance){
            EnemyManager.#instance = new EnemyManager;
        }
         return EnemyManager.#instance;
    }


    ressuscitate(){
    this.health = 200;
}
}