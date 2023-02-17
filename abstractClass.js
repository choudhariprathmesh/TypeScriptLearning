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
var Hundyai = /** @class */ (function (_super) {
    __extends(Hundyai, _super);
    function Hundyai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hundyai.prototype.Price = function () {
        return 900000;
    };
    Hundyai.prototype.getTotalSeats = function () {
        return 7;
    };
    Hundyai.prototype.Color = function () {
        return 'gray';
    };
    return Hundyai;
}(Car));
var hundai = new Hundyai();
console.log(hundai.CallFacility());
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
    return Toyota;
}(Car));
var Tata = /** @class */ (function (_super) {
    __extends(Tata, _super);
    function Tata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tata.prototype.Price = function () {
        return 11000000;
    };
    Tata.prototype.getTotalSeats = function () {
        return 7;
    };
    Tata.prototype.Color = function () {
        return 'white';
    };
    return Tata;
}(Car));
var toyota = new Toyota();
console.log(toyota.CallFacility());
//============================================================================================================
// full time  8 
// contract 
var Employee = /** @class */ (function () {
    // parameterisied constructor
    function Employee(name, paymentPerHour) {
        this.name = name;
        this.paymentPerHour = paymentPerHour;
    }
    return Employee;
}());
//let empl = new Employee();
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor(name, paymentPerHour, hoursOfWorking) {
        var _this = 
        // parent class constructor by using super.
        _super.call(this, name, paymentPerHour) || this;
        _this.hoursOfWorking = hoursOfWorking;
        return _this;
    }
    Contractor.prototype.CalculateSalary = function () {
        return this.paymentPerHour * this.hoursOfWorking;
    };
    return Contractor;
}(Employee));
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    // parameterised contructor
    function FullTimeEmployee(name, paymentPerHour) {
        return _super.call(this, name, paymentPerHour) || this;
    }
    return FullTimeEmployee;
}(Employee));
