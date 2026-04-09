class Enemy {

    static #instance;

    #imageEnemyFace = document.getElementById("imageEnemyFace");
    #divLifeBar = document.getElementById("divLifeBar");

    #happyFace = "img/happy.png";
    #painFace = "img/aw.png";
    #deadFace = "img/dead.png";

    constructor() {

        if(Enemy.#instance) return Enemy.#instance;

        this.health = 200;
        this.deathEvent = new DeathEvent(Event.DEATH_EVENT);
        this.deathEvent.addObserver(SoundManager.instance());

        this.ressuscitateEvent = new RessuscitateEvent(Event.RESSUSCITATE_EVENT)
        this.ressuscitateEvent.addObserver(SoundManager.instance());
        
        Enemy.#instance = this;

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

        if(this.isDead()) {
            this.deathEvent.notify();

       this.showDeadFace();
          
    }
    
    else {

        SoundManager.instance().playScream();
       this.showPainFace();

        setTimeout(()=>{this.showHappyFace()}, 100);

    }
    
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