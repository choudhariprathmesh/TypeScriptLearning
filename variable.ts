var x: string;
x = "codemind";
console.log(x);

// parent class , Base class , Super
class Animal {
  name: string;

  // parameterised constructor

  move(distnace: number) {
    console.log(`${distnace}`);
  }
}

// child class , sub , derived
class Dog extends Animal {
  bark() {
    console.log("bho bho");
  }
}

var objDog = new Dog();
objDog.bark();
objDog.move(20);
objDog.bark();


