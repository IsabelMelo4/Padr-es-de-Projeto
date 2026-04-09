class Game{

    executeAttackComand(){

    Enemy.instance().receiveDamage(40);

    if(Enemy.instance().isDead()) {

        Enemy.instance().showDeadFace();
            SoundManager.instance().playDeath();
            setTimeout(() => {Enemy.instance().ressuscitate()}, 5000);

    }
    
    else {

        SoundManager.instance().playScream();
        Enemy.instance().showPainFace();

        setTimeout(()=>{Enemy.instance().showHappyFace()}, 100);

    }
    }


}