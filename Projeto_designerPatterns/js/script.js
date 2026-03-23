let isDeath = false;

AudioManager.instance().playBackground();

function ressuscitatePlayer() {
    PlayerManager.instance().ressuscitate()
    lifeBarPlayer.style.width = PlayerManager.instance().health + "px";
    isDeath = false;

}    

function ressuscitateEnemy(id) {

    const enemy = enemies[id];
    if(!enemy) return;
    enemy.ressuscitate()
    const enemyDiv = document.querySelector(`.enemy[data-id="${id}"]`);
    if(!enemyDiv) return;
    const lifeBarEnemy = enemyDiv.querySelector(".life");
    lifeBarEnemy.style.width = "100%"; // ou enemy.health / maxHealth * 100 + "%"
    isDeath = false;
    
}   

const enemies = EnemyFactory.creatEnemy(4); //vou criar 4 inimigos com a factory

// percorre todos os inimigos
for(let i = 0; i < enemies.length; i++){

    // pega o inimigo atual
    const enemy = enemies[i];

    // cria uma div
    const div = document.createElement("div");

    // adiciona classe CSS
    div.classList.add("enemy");

    // guarda o id do inimigo no HTML
    div.dataset.id = enemy.id;

    // adiciona conteúdo
    div.innerHTML = `
        <div class="life" ></div>
        <img src="img/DrOctopus.png">
        <button onclick="attack_receiver_player()">Atacar</button>
        <button  onclick="attack_receiver_enemy(${enemy.id})">Receber ataque</button>
    `;

    // coloca na tela
    container.appendChild(div);
}



function attack_receiver_player(){             
console.log("ataquei o player ")

    if(isDeath) return;

    const player = PlayerManager.instance();

    player.health -= 40;
   
    lifeBarPlayer.style.width = player.health + "px";

    if (player.health <= 0) {
        console.log("die");

        AudioManager.instance().playDie();
        player.isDeath = true;

        setTimeout(ressuscitatePlayer, 5000);
    } else {
        AudioManager.instance().playAttack();
    }

}


function attack_receiver_enemy(id){

    console.log("recebi ataque", id);

    if(isDeath) return;

    const enemy = enemies[id];

    if(!enemy) return; 

    enemy.health -= 40;

    const enemyDiv = document.querySelector(`.enemy[data-id="${id}"]`);
    const lifeBarEnemy = enemyDiv.querySelector(".life");

    lifeBarEnemy.style.width = enemy.health + "px";

    if (enemy.health <= 0) {
        console.log("die");

        AudioManager.instance().playDie();
        enemy.isDeath = true;

        setTimeout(ressuscitateEnemy(id), 5000);


    } else {
        AudioManager.instance().playAttack();
    }
}
btnAttackEnemy.onclick = attack_receiver_enemy;
btnReceiverEnemy.onclick = attack_receiver_player;
