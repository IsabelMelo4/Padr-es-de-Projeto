class Event{

static DEATH_EVENT =  "death_event"
static DAMAGE_EVENT =  "damage_event"
static RESSURRECTION_EVENT = "ressurrection_event"

#observers;

constructor(type){
    this.type  = type;
    this.#observers = [];
    
}

addObservers(obsever){
this.#observers.push(obsever);
}

notify(){

for(let obsever of this.#observers){
    obsever.receiverEvent(this);
}

}


}