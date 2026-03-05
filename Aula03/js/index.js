let life = 200;
let isDead = false;

let screamAudio = new Audio("audio/scream.mp3");
let deathAudio = new Audio("audio/death.mp3");

function resetEnemyFace(){
    imageEnemyFace.src = "img/happy.png";
}

function resuscitate() {
    life = 200;
    divLifeBar.style.width = life + "px";
    imageEnemyFace.src = "img/happy.png";
    isDead = false;
}

function attackEnemy() {

    life -= 40;
    divLifeBar.style.width = life + "px";

    if(life <= 0) {

        imageEnemyFace.src = "img/dead.png";

        if(!isDead) {
            deathAudio.play();
            isDead = true;
            setTimeout(resuscitate, 5000);
        }

    }
    else {

        screamAudio.play();
        imageEnemyFace.src = "img/aw.png"; 
        setTimeout(resetEnemyFace, 100);

    }

}

buttonAttackEnemy.onclick = attackEnemy;