class Person {
    private _age: number;
    constructor(age: number) {
        this._age = age;
    }
    growOld = () => {
        this._age ++;
    }
    age() {
        return this._age;
    }
}
const objPerson1 = new Person(1); // object 

//objPerson1.growOld();

const result = objPerson1.growOld; // 

result();
console.log('age', objPerson1.age());