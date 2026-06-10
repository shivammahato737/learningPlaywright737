//1. Type 1 function-> No Arguement No returntype
function greet() //Define
{
    console.log("shivam");
    
}
greet() //call

//2.Type 2 -> with Arguement No returntype
function greetByName(name){
    console.log("Hi", name);
    
}
greetByName("Shivam")
greetByName("Amar")
greetByName("Virat")

//3. Type 3 -> No Arguement with returntype
function sayHello(){
    return "hello";
}

let relative = sayHello();
console.log(relative);

//3. Type 4 -> with Arguement and with returntype
function sumOfTwoNumber(a,b){
    return a+b
}
let c = sumOfTwoNumber(4,5)
let c1 = sumOfTwoNumber(10,15)
let c2 = sumOfTwoNumber(30,40)
console.log(c);
console.log(c1);
console.log(c2);

function sumOfThreeNumber(a,b,c){
    return a+ b + C
}
let d =sumOfThreeNumber(3,6,7)
d =sumOfThreeNumber(3,9,7)
d =sumOfThreeNumber(10,15,24)
console.log(d)

function sumOfThreeNumber(a, b, c){
    return a + b + c; // Fixed: Changed 'C' to 'c'
}
let d = sumOfThreeNumber(3, 6, 7);
d = sumOfThreeNumber(3, 9, 7);
d = sumOfThreeNumber(10, 15, 24);
console.log(d); // Output: 49