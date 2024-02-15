class Key {
    private signature: number;
    constructor() {
        this.signature = Math.random();
    };

    getSignature(): number {
        return this.signature;
    };
};

class Person {
    private key: Key;
    constructor(key: Key) {
        this.key;
    };
    getKey(): Key {
        return this.key;
    };
};

abstract class House {
    protected door: true | false;
    protected key: Key;
    protected tenants: Person[] = [];
    constructor(key: Key) {
        this.door = false;
        this.key = key;
    };
    abstract openDoor(key: Key): void;

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log('Wellcome');
        } else {
            console.log('Door are close');
        };
    };
};

class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('Door are open');
        } else {
            console.log('You got a wrong key');
        };
    };
};




const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};