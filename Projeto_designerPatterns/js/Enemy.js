class Enemy{

constructor(id, health = 200){

this.health = health;
this.id = id;

}

ressuscitate(){
    this.health = 200;
}


}