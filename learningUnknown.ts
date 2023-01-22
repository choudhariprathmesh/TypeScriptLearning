let value: unknown;
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
let value1: unknown = value; // OK
let value2: any = value; // OK
let value3: boolean = value; // Error
let value4: number = value; // Error
let value5: string = value; // Error
let value6: object = value; // Error
let value7: any[] = value; // Error
console.log("======================================================");

let someVariable : unknown;
someVariable = loadString();
if(typeof someVariable == 'string')
{
    console.log(someVariable.trim());
}
console.log("======================================================");

someVariable = loadNumber();
if(typeof someVariable == 'number')
{
    console.log(someVariable.toFixed(2));
}
console.log("======================================================");
 
function load(): unknown {
    return 'Hello World ';
     }
    let hello = load();
    const trimmed = hello.trim();















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

