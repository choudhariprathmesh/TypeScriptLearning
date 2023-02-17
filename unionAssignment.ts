console.log("======================= Union =============================");

type test= string | string[]

function result(input: test) {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    
    else {
        line = input.map(x => x.trim()).join(' ');
    }
    return line;
}
console.log(result(['Prathmesh ',"Choudhari","22"]));

console.log("======================= class Para. Properties =============================");

class student{
    constructor(public name:string,public number:Number,public email:String){}
}

const s1=new student("Prathmesh Choudhari",9767262937,"prathmeshchoudhari07@gmail.com")
console.log("Name :- ",s1.name);
console.log("Number :- ",s1.number);
console.log("Email :- ",s1.email);
console.log("======================= interSection Type =============================");

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
    console.log(`Dear ${"prathmesh"} .
    I hope you have received our email at ${"prathmeshchoudhari07@gmail.com"}.
    We will call you at ${"9767262937"} shortly ,`) ;
}
contact()
console.log("======================= optional para =============================");

function dis(id: number, name: string, role?: string) {
    console.log('Name :-', name);
    console.log('Id :- ', id);
    if(role != undefined) {
        console.log('Role :- ', role);// 
    }
}
dis(77,"Ram" ,'DEVELOPER'); 
console.log("-----------------------------------------------");

dis(101,"Raju"); 















