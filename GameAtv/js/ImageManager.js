class ImageManager {

    static #instance;

    constructor(){
        if(ImageManager.#instance){
            return ImageManager.#instance;
        }

        this.player = document.getElementById("player");
        this.scenario = document.getElementById("scenario");
        ImageManager.#instance = this;
    }

    playerAttackImg(){
        this.player.src = "img/ryuAttack.png";
    }

    playerStaticImg(){
        this.player.src = "img/ryu.png";
    }

    playerWinnerImg(){
        this.player.src = "img/ryuWinner.png";
    }

    scenarioImg(){
        this.scenario.src = "img/scenario.png";
    }


    static instance(){
        if(!ImageManager.#instance){
            ImageManager.#instance = new ImageManager();
        }
        return ImageManager.#instance;
    }
}