let value: any;
value = true; // OK
value = 42; // OK
value = "Hello World"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK

function loadString(): any {
  return "some string ";
}
function loadNumber(): any {
  return 123.456;
}

let someVariable: any;
someVariable = loadString();
console.log(someVariable.trim());
//The Trim method removes from the current string all leading and trailing white-space characters.
// but above if loadString method return number then at run time it will fail .
someVariable = loadNumber();
console.log(someVariable.toFixed(2));
// to avoid this we can use unknown
