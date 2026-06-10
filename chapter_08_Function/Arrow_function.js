//Arrow function - it generally work when there is single line 

const greet = function(name){ // Remove function,return, curly braces and add =>
    return `hello ${name}`
}


const greet1 = (name1) => `hello ${name1}` //both are same
console.log(greet1("shivam"));
console.log();
console.log();


const mYBook = function(newbook){
    return `science ${newbook}`
}
const mYBook = (newbook) => `science ${newbook}`

const CountNumber = n=>n*2;
console.log(CountNumber(10));

 const getResult = (score) => {
    if(score>=70) return "pass"
    else "fail"
 }
 console.log(getResult);
 



