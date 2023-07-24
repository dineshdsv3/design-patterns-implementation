class Human {
  love(): string {
    return "Love song";
  }

  eat(): string {
    return "Eating";
  }

  sleep(): string {
    return "ZZZzzz!!";
  }
}

interface Developer {
  writeCode(): string;
}

interface Musician {
  playMusic(): string;
}

class Dinesh extends Human implements Developer {
  writeCode(): string {
    return "Learnt JS";
  }
}

class Brendon extends Human implements Musician, Developer {
  playMusic(): string {
    return "Melody songs";
  }
  writeCode(): string {
    return "Learnt java";
  }
}

function interfaceDemo() {
  let person1 = new Dinesh();
  console.log("===Person 1 details====")
  console.log(person1.eat());
  console.log(person1.writeCode());
  console.log(person1.sleep());

  let person2 = new Brendon();
  console.log('====Person 2 detail=====')
  console.log(person2.eat());
  console.log(person2.playMusic());
  console.log(person2.writeCode());
  console.log(person2.sleep())
}

interfaceDemo();
