function attackEnemy() {

    Enemy.instance().receiveDamage(40);

    if(Enemy.instance().isDead()) {

        Enemy.instance().showDeadFace();

        if(Enemy.instance().isDead()) {
            SoundManager.instance().playDeath();
            setTimeout(() => {Enemy.instance().ressuscitate()}, 5000);
        }

    }
    else {

        SoundManager.instance().playScream();
        Enemy.instance().showPainFace();

        setTimeout(()=>{Enemy.instance().showHappyFace()}, 100);

    }

}

buttonAttackEnemy.onclick = attackEnemy;