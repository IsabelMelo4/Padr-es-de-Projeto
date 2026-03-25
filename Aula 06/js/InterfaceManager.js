class InterfaceManager{

    
    static #instance

    constructor(){
        if(InterfaceManager.#instance) {
            
        InterfaceManager.#instance = this;
        
        }
}


static instance(){
   if(!InterfaceManager.#instance) InterfaceManager.#instance = new InterfaceManager;
        return InterfaceManager.#instance;

}

}
