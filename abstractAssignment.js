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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.Wheel = function () {
        return '4 wheeler';
    };
    Car.prototype.CheckAC = function () {
        return 'Ac is available';
    };
    Car.prototype.CallFacility = function () {
        return "Call facility supported";
    };
    return Car;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyota.prototype.Price = function () {
        return 1000000;
    };
    Toyota.prototype.getTotalSeats = function () {
        return 5;
    };
    Toyota.prototype.Color = function () {
        return 'white';
    };
    Toyota.prototype.GPS = function () {
        return 'GPS Not available';
    };
    return Toyota;
}(Car));
var Hyundai = /** @class */ (function (_super) {
    __extends(Hyundai, _super);
    function Hyundai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hyundai.prototype.Price = function () {
        return 900000;
    };
    Hyundai.prototype.getTotalSeats = function () {
        return 7;
    };
    Hyundai.prototype.Color = function () {
        return 'gray';
    };
    Hyundai.prototype.GPS = function () {
        return 'GPS available';
    };
    return Hyundai;
}(Car));
var myHyundai = new Hyundai();
console.log(myHyundai.GPS());
var myt = new Toyota();
console.log(myt.GPS());
// abstract class Car {
//   Wheel(): string {
//     return "4 wheeler";
//   }
//   CheckAC(): string {
//     return "Ac is available";
//   }
//   CallFacility(): string {
//     return "Call facility supported";
//   }
//   abstract Price(): number;
//   abstract getTotalSeats(): number;
//   abstract Color(): string;
// //   abstract GPS(): string;
// }
// class Toyota extends Car {
//   Price(): number {
//     return 1000000;
//   }
//   getTotalSeats(): number {
//     return 5;
//   }
//   Color(): string {
//     return "white";
//   }
//   GPS():string{
//    return "GPS is Not Available In Toyota";
// }
// }
// class Hundyai extends Car {
//   Price(): number {
//     return 900000;
//   }
//   getTotalSeats(): number {
//     return 7;
//   }
//   Color(): string {
//     return "gray";
//   }
//   GPS():string{
//     return "GPS is Available In Hundyai"
// //    console.log("GPS is Avilable");
//  }
// }
// console.log("================================");
// var t1=new Toyota();
// console.log(t1.GPS());
// console.log("--------------------------------");
// var h1=new Hundyai();
// console.log(h1.GPS());
// console.log("================================");
