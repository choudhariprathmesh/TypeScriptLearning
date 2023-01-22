var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var x;
x = "codemind";
console.log(x);
// parent class , Base class , Super 
var Animal = /** @class */ (function () {
    // parameterised constructor 
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distnace) {
        console.log("".concat(distnace));
    };
    return Animal;
}());
// child class , sub , derived
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bark = function () {
        console.log('bho bho');
    };
    return Dog;
}(Animal));
var objDog = new Dog("test");
objDog.bark();
objDog.move(10);
objDog.bark();
