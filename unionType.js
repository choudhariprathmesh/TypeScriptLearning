var sn;
sn = 'codemind';
sn = 100;
function formatCommandLine(input) {
    var line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    // else {
    //     line = input.map(x => x.trim()).join(' ');
    // }
    // return line;
}
console.log(formatCommandLine('hello ')); // hello
console.log(formatCommandLine(['hello ', 'world '])); // helloword
// console.log(formatCommandLine(123457));
// class Person1 {
//     public fname: string;
//     public age: number;
//     // parameterised constructor .
//     constructor(fname: string, age: number) {
//         this.fname = fname;
//         this.age = age;
//     }
// }
// const jack = new Person1('Jack', 30);
// console.log(jack.fname, jack.age);
var Person1 = /** @class */ (function () {
    // parameterised constructor 
    function Person1(fname, age) {
        this.fname = fname;
        this.age = age;
    }
    return Person1;
}());
var jack = new Person1('Jack', 30);
console.log(jack.fname, jack.age);
