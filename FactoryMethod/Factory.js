class Computer {
  description;
  getInfo() {
    return this.description;
  }
}

class PC extends Computer {
  makeComputer(cpu, ram, storage, display) {
    this.description = `Dell PC: CPU ${cpu}, RAM ${ram}, Storage ${storage}, DISPLAY ${display}`;
  }
}

class Laptop extends Computer {
  makeComputer(cpu, ram, storage, display) {
    this.description = `Dell Laptop: CPU ${cpu}, RAM ${ram}, Storage ${storage}, DISPLAY ${display}`;
  }
}

class Factory {
  recognizeComputer(type) {
    //% We are eliminating the  if else by using the object below defined as "computers"
    // if (type === "PC") {
    //   return new PC();
    // } else if (type === "Laptop") {
    //   return new Laptop();
    // }
    // let computers = require('./computers.json')
    let computers = {
      "PC":  () =>  new PC(),
      "Laptop": () =>  new Laptop(),
    };
    // console.log(typeof(JSON.parse(computers[type.toString()])), 'parsedJSON')
    return computers[type.toString()];
  }
}

class Order {
  placeOrder(type, cpu, ram, storage, display) {
    let product;
    let factory = new Factory();
    product = factory.recognizeComputer(type)();

    //% We are eliminating the Switch case by creating the Factory class and returning the appropriate class
    // switch (type) {
    //   case "PC":
    //     product = new PC();
    //     product.makeComputer(cpu, ram, storage, display);
    //     return product;
    //   case "Laptop":
    //     product = new Laptop();
    //     product.makeComputer(cpu, ram, storage, display);
    //     return product;
    // }

    product.makeComputer(cpu, ram, storage, display);
    return product;
  }
}

const order = new Order();
computer = order.placeOrder("Laptop", 4, 16, 512, 16);
console.log(computer.getInfo());
