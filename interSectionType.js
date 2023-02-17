function contact(details) {
    console.log("Dear ".concat(details.name, " .\n    I hope you have received our email at ").concat(details.email, ".\n    We will call you at ").concat(details.phone, " shortly ,"));
}
var objContact = { name: 'Dnyanesh', email: 'dnyanesh@gmail.com', phone: '9096652214' };
contact(objContact); // string
