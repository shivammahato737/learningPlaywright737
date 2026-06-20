let fastServer = new Promise(function(resolve){
    setTimeout(function(){
        resolve ("Fast 100ms")
    }), 100
})
let slowServer = new Promise(function(resolve){
    setTimeout(function(){
        resolve ("Slow 500ms")
    }), 500
})
Promise.race([fastServer, slowServer]).then(function(winner){
    console.log("winner", winner);
    

})

Promise.resolve(5)
.then(function(val){
    console.log(val);
    return val + 1
    
})
.then(function(val){
    console.log(val);
    return val + 1
    
})
.then(function(val){
    console.log(val);
    
})