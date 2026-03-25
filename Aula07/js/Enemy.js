class Enemy {

    static #instance;

    #observers= [];

    #imageEnemyFace = document.getElementById("imageEnemyFace");
    #divLifeBar = document.getElementById("divLifeBar");

    #happyFace = "img/happy.png";
    #painFace = "img/aw.png";
    #deadFace = "img/dead.png";

    constructor() {

        if(Enemy.#instance) return Enemy.#instance;

        this.health = 200;

        Enemy.#instance = this;

    }
 
    addObserver(){




    }

    

    ressuscitate() {
        this.health = 200;
        this.#setLife(this.health);
        this.showHappyFace();
    }

    isDead() {
        return this.health === 0;
    }

    receiveDamage(damage) {

        this.health -= damage;

        if(this.health < 0) this.health = 0;

        this.#setLife(this.health);

    }

    static instance() {
        if (!Enemy.#instance) Enemy.#instance = new Enemy();
        return Enemy.#instance;
    }

    showHappyFace() {
        InterfaceManager.instance().setImage(this.#imageEnemyFace, this.#happyFace);
    }   

    showPainFace() {
        InterfaceManager.instance().setImage(this.#imageEnemyFace, this.#painFace);
    }

    showDeadFace() {
        InterfaceManager.instance().setImage(this.#imageEnemyFace, this.#deadFace);
    }

    #setLife(life) {
        InterfaceManager.instance().setWidth(this.#divLifeBar, life);
    }

}