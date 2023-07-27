
class SingleTon {
  static counter = 1;
  static instance = new SingleTon();

  static getInstance() {
    return SingleTon.instance;
  }

  nextCounter() {
    return ++SingleTon.counter;
  }

  getCounter() {
    return SingleTon.counter;
  }
}

let single = SingleTon.getInstance();
console.log(single.nextCounter());
console.log(single.nextCounter());
console.log(single.nextCounter());
console.log(single.nextCounter());

let single2 = SingleTon.getInstance();
console.log(single2.nextCounter());
console.log(single2.nextCounter());
