//var, let , const
// var - function scoped
var a = 10 //global scope
console.log(a)

//function - resuable code that can run multiple times
 function sayHello(){ //definition of function
    console.log("Hi shivam")
    var a = 20;
    console.log(a)
}
//calling the function
sayHello()


//local and global variable
let a = 10;  // global variable
console.log(a)

function sayHello(){
    console.log("Happy new year")
    let b = 20;   // local variable
    console.log(b)
}
sayHello();

let name = "shivam";
console.log(name);

// let b = 10;
// let = keywords
// b = identifier
// = = operator
// 10 = literals
