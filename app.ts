class Parent {
  name;
  setName(name) {
    this.name = name;
  }
}
class Child extends Parent {
  getName() {
    return this.name;
  }
}
let c1 = new Child();
c1.setName("choudhari");
console.log(c1.getName());
