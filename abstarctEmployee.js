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
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    TakePhoto.prototype.getReelTime = function () {
        // some complex calculation
        return 7;
    };
    return TakePhoto;
}());
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(cameraMode, filter, burst) {
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        _this.burst = burst;
        return _this;
    }
    Instagram.prototype.getSepia = function () {
        console.log("Sepia");
    };
    return Instagram;
}(TakePhoto));
var pc = new Instagram("Sony", "Yes", 3);
console.log(pc.getReelTime());
console.log(pc.cameraMode);
console.log(pc.filter);
// // full time  8
// // contract
// abstract class Employee {
//   name: string;
//   paymentPerHour: number;
//   // parameterisied constructor
//   constructor(name: string, paymentPerHour: number) {
//     this.name = name;
//     this.paymentPerHour = paymentPerHour;
//   }
//   // this method is abstract method only declartion
//   public abstract CalculateSalary(): number;
// }
// //let empl = new Employee();
// class Contractor extends Employee {
//   hoursOfWorking: number;
//   constructor(name: string, paymentPerHour: number, hoursOfWorking: number) {
//     // parent class constructor by using super.
//     super(name, paymentPerHour);
//     this.hoursOfWorking = hoursOfWorking;
//   }
//   public CalculateSalary(): number {
//     return this.paymentPerHour * this.hoursOfWorking;
//   }
// }
// class FullTimeEmployee extends Employee {
//   // parameterised contructor
//   constructor(name: string, paymentPerHour: number) {
//     super(name, paymentPerHour);
//   }
//   public CalculateSalary(): number {
//     return this.paymentPerHour * 8;
//   }
// }
// let objcontractor = new Contractor("Harry", 8, 10); // 40
// let objfullTimeEmployee = new FullTimeEmployee("Jack", 8);
// console.log(objcontractor.CalculateSalary());
// console.log(objfullTimeEmployee.CalculateSalary());
