var value;
value = true; // OK
value = 42; // OK
value = "Hello World"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
console.log("======================================================");
// let value: unknown;
var value1 = value; // OK
var value2 = value; // OK
var value3 = value; // Error
var value4 = value; // Error
var value5 = value; // Error
var value6 = value; // Error
var value7 = value; // Error
console.log("======================================================");
var someVariable;
someVariable = loadString();
if (typeof someVariable == 'string') {
    console.log(someVariable.trim());
}
console.log("======================================================");
someVariable = loadNumber();
if (typeof someVariable == 'number') {
    console.log(someVariable.toFixed(2));
}
console.log("======================================================");
function load() {
    return 'Hello World ';
}
var hello = load();
var trimmed = hello.trim();
// function log(value: unknown) {
//     // if (typeof value == 'number') {
//     // console.log(value.toFixed(3));
//     // } else {
//     // console.log(value);
//     // }
//     console.log(value.toFixed(3));
//      }
//     log("test");
//     log('Hello world');
//     //  Number of digits after the decimal point
