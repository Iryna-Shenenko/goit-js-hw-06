class Storage {
    #items;

    // Ініціалізуємо приватну властивість

    constructor(items) {
        this.#items = items;
        
    }

getItems(){
    return this.#items;
}
    // Додаємо новий товар до масиву товарів

    addItem(newItem) {
        this.#items.push(newItem); 
        
    }

    // видаляє товар  з масиву товарів
    
    removeItem(item) {
        this.#items = this.#items.filter(i => i !== item); 
        
    }
    
}



const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); 

storage.addItem("Droid");
console.log(storage.getItems()); 

storage.removeItem("Prolonger");
console.log(storage.getItems()); 

storage.removeItem("Scaner");
console.log(storage.getItems());
