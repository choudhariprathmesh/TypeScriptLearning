console.log("======================= Union =============================");
function result(input) {
    var line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map(function (x) { return x.trim(); }).join(' ');
    }
    return line;
}
console.log(result(['Prathmesh ', "Choudhari", "22"]));
console.log("======================= class Para. Properties =============================");
var student = /** @class */ (function () {
    function student(name, number, email) {
        this.name = name;
        this.number = number;
        this.email = email;
    }
    return student;
}());
var s1 = new student("Prathmesh Choudhari", 9767262937, "prathmeshchoudhari07@gmail.com");
console.log("Name :- ", s1.name);
console.log("Number :- ", s1.number);
console.log("Email :- ", s1.email);
console.log("======================= interSection Type =============================");
function contact(details) {
    console.log("Dear ".concat("prathmesh", " .\n    I hope you have received our email at ").concat("prathmeshchoudhari07@gmail.com", ".\n    We will call you at ").concat("9767262937", " shortly ,"));
}
contact();
console.log("======================= optional para =============================");
function dis(id, name, role) {
    console.log('Name :-', name);
    console.log('Id :- ', id);
    if (role != undefined) {
        console.log('Role :- ', role); // 
    }
}
dis(77, "Ram", 'DEVELOPER');
console.log("-----------------------------------------------");
dis(101, "Raju");
