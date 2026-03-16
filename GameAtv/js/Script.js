let winner = false;


function resetFace(){
player.src = "img/ryu.png";

}

function ressuscitate(){
   EnemyManager.instance().ressuscitate();
   lifeArea.style.width = enemy.health + "px";
   player.src = "img/ryu.png";
   winner = false;

}

function attack(){

 let enemy = EnemyManager.instance();

    if(winner) return;

    enemy.health -= 40;

    if(enemy.health < 0){
        enemy.health = 0;
    }

   lifeArea.style.width = enemy.health + "px";

    if(enemy.health === 0){

        player.src = "img/ryuWinner.gif";
  

        if(!winner){
            AudioManager.instance().playWinner();
            setTimeout(ressuscitate, 300000);
            venceu = true;
        }

    } 
    else {

        AudioManager.instance().playAttack();
        player.src = "img/ryuAtaque.png";
        setTimeout(resetFace, 1000);

    }
  
}

buttonAttack.onclick = attack;
