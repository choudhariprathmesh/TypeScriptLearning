
abstract class TakePhoto{
  constructor(public cameraMode:string,public filter:string){}

  abstract getSepia():void

  getReelTime():number{
    // some complex calculation
    return 7
  }
}

class Instagram extends TakePhoto{
  constructor(public cameraMode:string, public filter:string, public burst:number){

    super(cameraMode,filter)
  
}
  getSepia(): void {
      console.log("Sepia");
      
  }
}

var pc =new Instagram("Sony","Yes",3)
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
