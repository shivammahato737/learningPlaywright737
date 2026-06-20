let apiCall = new Promise (function(reslove, reject){
    reject("500 Error")


})
apiCall.then(function(data){
    console.log("Data is successful");
    
}).catch(function(error){
    console.log(error);
    
})

//finally - always executed either its pass or failed 
let testRun = new Promise(function(resolve, reject){
    reject("Assertion Failed")
})

testRun.then(function(msg){ //resolve
    console.log(msg)
    
}).catch(function(error){ //reject
    console.log(error);
    
}).finally(function(){ //always executed
    console.log("I will executed anyhow");
    
})



