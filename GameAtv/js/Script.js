let winner = false;

function resetFace(){
    ImageManager.instance().playerStaticImg();

}

function ressuscitate(){
    
   EnemyManager.instance().ressuscitate();
   lifeArea.style.width = EnemyManager.instance().health + "px"; //lembrar de instanciar sempre !!! 
   ImageManager.instance().playerStaticImg();
   winner = false;

}

function attack(){

 let enemy = EnemyManager.instance();

   if(winner)
    
    return;

    enemy.health -= 40;

    lifeArea.style.width = enemy.health + "px";

    if(enemy.health === 0){
        ImageManager.instance().playerWinnerImg();
    

        
    if(!winner){

        AudioManager.instance().playWinner();
        winner = true;
        setTimeout(ressuscitate, 5000);

    }

    }


    else{

        AudioManager.instance().playAttack();
        ImageManager.instance().playerAttackImg()
        setTimeout(resetFace, 1000);
    }

   }
  


buttonAttack.onclick = attack;
