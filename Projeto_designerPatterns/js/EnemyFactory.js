class EnemyFactory{

static creatEnemy(amount){

    const enemy = [];

    for(let i = 0; i < amount; i++){
        enemy.push(new Enemy(i)) /* para cada loop adiciona o id do inimigo e adiciona ele na lista */
    }

    return enemy 
}

}