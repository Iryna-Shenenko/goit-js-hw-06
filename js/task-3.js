class StringBuilder {
    #value;

    // Ініціалізуємо приватну властивість

    constructor(value) {
        this.#value = value;
    }
    // повертаємо поточне значення приватної властивості value

    getValue() {
        return this.#value;
    }

    // Додаємо рядок в кінець значення

    padEnd(str) {
        this.#value += str;
    }

    //Додаємо рядок на початок значення
    padStart(str) {
        this.#value = str + this.#value;
    }
    // Використовуємо існуючий метод для додавання 
    

    padBoth(str) {
        this.padStart(str);//  на початок
        this.padEnd(str); // в кінці
    }
}




const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
