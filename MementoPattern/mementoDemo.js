// 1. Create a Memento class which will hold the state.
// 2. Create 2 methods: getMemento & setMemento in Location class.
// 3. getMemento: creates a Memento with the state of the current object and returns it.
// 4. In main, save the Memento returned by getMemento in a stack.
// 5. setMemento: receives a Memento and restores the state of the current object.
// 6. In main, pop the Memento from the stack and pass it to the setMemento method.

class Location {
    static #locationSequence = 1;
    #sequence = 0;
    #city;
    constructor() {
        this.#city = "";
    }

    print() {
        console.log(`${this.#sequence}: ${this.#city}`);
    }

    moveTo(city) {
        this.#city = city;
        this.#sequence = Location.#locationSequence++;
    }
}

let location = new Location();
location.moveTo("Kolkata");
location.print();
location.moveTo("Indore");
location.print();
location.moveTo("Mumbai");
location.print();
location.moveTo("Kolkata");
location.print();
