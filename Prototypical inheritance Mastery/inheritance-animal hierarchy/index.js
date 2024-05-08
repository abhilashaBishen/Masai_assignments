

// Class Definition: Animal
class Animal {
    #type;

    constructor(type) {
        this.#type = type;
    }

    get Type() {
        return this.#type;
    }
}

// Class Definition: Mammal
class Mammal extends Animal {
    constructor() {
        super("Mammal");
    }
}

// Class Definition: Bird
class Bird extends Animal {
    constructor() {
        super("Bird");
    }
}

// Class Definition: Lion
class Lion extends Mammal {
    #maneColor;

    constructor() {
        super();
        this.#maneColor = "Brown"; // default value
    }

    get maneColor() {
        return this.#maneColor;
    }

    set maneColor(color) {
        this.#maneColor = color;
    }
}

// Class Definition: Cow
class Cow extends Mammal {
    #milkProduction;

    constructor() {
        super();
        this.#milkProduction = "High"; // default value
    }

    get MilkProduction() {
        return this.#milkProduction;
    }

    set MilkProduction(level) {
        this.#milkProduction = level;
    }
}

// Class Definition: Eagle
class Eagle extends Bird {
    #wingspan;

    constructor() {
        super();
        this.#wingspan = "Large"; // default value
    }

    get Wingspan() {
        return this.#wingspan;
    }

    set Wingspan(value) {
        this.#wingspan = value;
    }
}

// Class Definition: Sparrow
class Sparrow extends Bird {
    #wingspan;

    constructor() {
        super();
        this.#wingspan = "Small"; // default value
    }

    get wingspan() {
        return this.#wingspan;
    }

    set wingspan(value) {
        this.#wingspan = value;
    }
}

// Test the classes
const lion = new Lion();
console.log("Lion Type:", lion.Type); 
console.log("Lion Mane Color:", lion.maneColor); 
const cow = new Cow();
console.log("Cow Type:", cow.Type); 
console.log("Cow Milk Production:", cow.MilkProduction); 

const eagle = new Eagle();
console.log("Eagle Type:", eagle.Type); 
console.log("Eagle Wingspan:", eagle.Wingspan); 
const sparrow = new Sparrow();
console.log("Sparrow Type:", sparrow.Type); 
console.log("Sparrow Wingspan:", sparrow.wingspan); 
