function reset(){
player.src = "img/ryu.png";
}



function attack(){

    AudioManager.instance().playAttack();
    player.src = "img/ryuAtaque.png";
    setTimeout(reset, 1000);
}

buttonAttack.onclick = attack;
