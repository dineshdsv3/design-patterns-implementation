class Shape {
  constructor() {
    this.unique = Math.floor(Math.random() * 100);
  }

  newObject() {
    return new Shape();
  }

  clone() {
    let obj = this.newObject();
    obj.unique = this.unique;
    return obj;
  }

  print() {
    console.log(`Shape ${this.unique}`);
  }
}

class Line extends Shape {
  constructor() {
    super()
    this.another = Math.floor(Math.random() * 100);
  }

  newObject() {
    return new Line();
  }

  clone() {
    let obj = super.clone();
    obj.another = this.another;
    return obj;
  }

  print() {
    console.log(`Line ${this.unique} Another ${this.another}`);
  }
}

(function cloneDemo() {
  var shape = new Line();
  shape.print();
  shape.print();
  var shape2 = shape.clone();
  shape2.print();
})();
