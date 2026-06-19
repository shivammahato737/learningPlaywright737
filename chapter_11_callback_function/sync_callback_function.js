const { default: test } = require("playwright/test");

function placeOrder(item, callback){
    console.log("..placing order");
    callback()
}
function print(){
    console.log("Done with the order");
    
}
placeOrder("Burger", print)//print is callback_function

console.log("-----------------------------------------------------------------------");


function placeOrder (item, callback){
    console.log("order placed:"  + item);
    callback()
}
placeOrder("Burger", function (){
    console.log("order is ready! pick it up.");
})


let testResult = ["pass", "fail", "pass", "skip"]
testResult.forEach(function(result , index){
    console.log("Test" + index + " -> " + result)
    
})

//function expression
const fruits = ["mango", "apple", "banana", "orange", "watermelon"]
fruits.forEach(function(item, index){
    console.log("fruits" + index, " ->" , item);
    
})

//Arrow function
const fruits = ["mango", "apple", "banana", "orange", "watermelon"]
fruits.forEach( (item, index)=>{
    console.log("fruits" + index, " -> ", item);
    
})
  






