// We are declaring the static counter, instance variables and assigning the instance to the Singleton class,
// instead of returning class we are returning the instance of SingleTon class in getInstance function
// In the nextCOunterFunction we are returning the counter from the SingleTon
// We are assigning the instance of SingleTon Class in single and single2 variables
// As SingleTon is Anti-Pattern, It's not recommended to use Singleton Pattern.
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
