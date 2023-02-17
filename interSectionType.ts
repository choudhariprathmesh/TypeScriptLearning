type Person2 = {  
    name: string;
}
type Email = {
    email: string;
}
type Phone = {
    phone: string
}
type ContactDetails = & Person2 & Email & Phone;

function contact(details: ContactDetails) {
    console.log(`Dear ${details.name} .
    I hope you have received our email at ${details.email}.
    We will call you at ${details.phone} shortly ,`) ;
}
let objContact : Person2 & Email & Phone = { name : 'Dnyanesh', email : 'dnyanesh@gmail.com', phone: '9096652214'};


contact(objContact) // string