let order = new Promise(function(resolve, reject){
    let foodReady = true
    if(foodReady){
        resolve("pizza is delivered")
    }else{
        reject("order is cancelled")

    }
})
console.log(order);
