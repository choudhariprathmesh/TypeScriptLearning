var Person = /** @class */ (function () {
    function Person(age) {
        var _this = this;
        this.growOld = function () {
            _this._age++;
        };
        this._age = age;
    }
    Person.prototype.age = function () {
        return this._age;
    };
    return Person;
}());
var objPerson1 = new Person(1); // object 
//objPerson1.growOld();
var result = objPerson1.growOld; // 
result();
console.log('age', objPerson1.age());
