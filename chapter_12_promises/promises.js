let order = new Promise(function(resolve, reject){
    let foodReady = true
    if(foodReady){
        resolve("pizza is delivered")
    }else{
        reject("order is cancelled")

    }
})
console.log(order);

let apiCall = new Promise(function(resolve, reject){
    resolve({status:200, body: "User data"})
})
apiCall.then(function(response){
    console.log(response);
    console.log(response.status);
    console.log(response.body);
    

})
