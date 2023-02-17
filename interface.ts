interface Iproduct{
    id:number;
    name:string;
    discri:string;
    price:number;
}

var objProduct: Iproduct={
    id: 1,
    name: "prathmesh",
    discri: "good",
    price: 100000
}

// abstarct class ad interface 

// abstarct class have abstarct method or non abstarct method.
// we have only abstarct method.


// 

interface IPrint {
    print():void;
}

class EXCEL implements IPrint {
    print(): void {
       console.log('EXCEL');
    }

}

class DOC implements IPrint {
    print(): void {
       console.log("DOC");
    }

}

class PDF implements IPrint {
    print(): void {
        console.log("PDF");
    }

}

let objEXCEL = new EXCEL();
objEXCEL.print();
