class Superman {
    fly() {
        console.log('Up, Up and Away')
    }
}

class Mosquito {
    fly() {
        console.log('Bzzz..')
    }
}

class Plane {
    fly() {
        console.log("Take off");
    }
}

let flyingObjects = [new Superman(), new Mosquito(), new Plane()];

flyingObjects.forEach((flyingObject) => {
    flyingObject.fly() //% True polymorphism - different objects, same method
})