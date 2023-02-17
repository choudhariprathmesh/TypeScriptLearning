var Gender;
(function (Gender) {
    Gender[Gender["Other"] = 2] = "Other";
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender.Other);
console.log(Gender[0]);
console.log(Gender[1]);
console.log(Gender[2]);
