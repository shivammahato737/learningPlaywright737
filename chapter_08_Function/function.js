//function - it is a reusable block of code that perform a specific task
//Instead of repeating logic, you define once and call it whenever needed

//without function repeated logic
let score = 75
let result = score >=85 ? "pass" : "fail"
console.log(result)

let score = 90
let result = score >=85 ? "pass" : "fail"
console.log(result)

//with function 
function getResult(score){
    return score2 >=70 ?"pass" : "fail"

}
getResult(74)
getResult(90)

function show(){  
       
    console.log("Inside the function x = " , x);   
}   
let x =20; 
console.log("Outside the function x = " , x);   
show();  