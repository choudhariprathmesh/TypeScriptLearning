console.log("===========================================================");
var num1 = Number(prompt('Please Enter Your Maths Marks')) ;
var num2 = Number(prompt('Please Enter Your Physics Marks')) ;
var num3 = Number(prompt('Please Enter Your Chemistry Marks')) ;console.log(num1);
console.log("Your Maths Marks Is :- ",num1);
console.log("Your Physics Marks Is :- ",num2);
console.log("Your Chemistry Marks is :- ",num3);
var sumAdd = (num1+num2+num3)
console.log("Total Of Marks Is :- ",sumAdd);
var sum = (num1+num2+num3)/3
console.log("----------------------------------------------------------");

console.log("Average Of Marks Is :- ",sum.toFixed(2));
if (sum>=90) {
    console.log("Your Grade Is A");    
}
console.log("===========================================================");

