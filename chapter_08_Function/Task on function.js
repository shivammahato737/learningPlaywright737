/*If statusCode>=200 and statusCode < 300 then...*/

function validateStatusCode(statusCode){
    if (statusCode >=200 && statusCode<300){
        console.log("Request is fine");
        
    }
}
const validateStatusCode_Exp = function(statusCode){
    if (statusCode >=200 && statusCode<300){
        console.log("Request is fine");
        
    }
}
const validateStatusCode_Arrow = (statusCode)=>{
    if (statusCode >=200 && statusCode<300){
        console.log("Request is fine");  
        
    }
}


validateStatusCode(220)
validateStatusCode_Exp(225)
validateStatusCode_Arrow(225)

//

//IIFE(Invoked function expression) - remove a name and add a bracket and call yourself
(function (){
    console.log("Hi");
    
})
()

function add(a,b,c,d,e){
    return a+b+c+d+e
}
let arr=[5,6,10,12,15]
console.log(add(...arr))
