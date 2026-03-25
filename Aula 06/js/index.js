let isDead = false;

function resetEnemyFace(){
    imageEnemyFace.src = "img/happy.png";
}

function ressuscitate() {
    Enemy.instance().ressuscitate();
    divLifeBar.style.width = Enemy.instance().health + "px";
    imageEnemyFace.src = "img/happy.png";
    isDead = false;
}

function attackEnemy() {

     let enemy = Enemy.instance();

    enemy.health -= 40;

    divLifeBar.style.width = enemy.life + "px";

    if( enemy.health < 0) life = 0;

    divLifeBar.style.width = enemy.health + "px";
 
    if(enemy.health == 0) {
    
        imageEnemyFace.src = "img/dead.png";

        if(!isDead) {
            AudioManager.instance().playDeath();
            isDead = true;
            setTimeout(ressuscitate, 1000);
        }
    }

    else {

        AudioManager.instance().playScream();
        imageEnemyFace.src = "img/aw.png"; 

        setTimeout(resetEnemyFace, 100);
    }
}

buttonAttackEnemy.onclick = attackEnemy;

//refatorar 