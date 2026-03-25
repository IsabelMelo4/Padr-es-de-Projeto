class InterfaceManager {

    static #instance;

    constructor() {
        if(InterfaceManager.#instance) return InterfaceManager.#instance;
        InterfaceManager.#instance = this;
    }

    static instance() {
        if (!InterfaceManager.#instance) InterfaceManager.#instance = new InterfaceManager();
        return InterfaceManager.#instance;
    }

    setImage(imageElement, imagePath) {
        imageElement.src = imagePath;
    }

    setWidth(element, width) {
        element.style.width = width + "px";
    }

}