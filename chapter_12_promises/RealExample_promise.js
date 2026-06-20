//promise chaining

function openBrowser(){
    return new Promise(function(resolve){
        resolve("Browser opened")
    })
}
function goToLogin(){
    return new Promise(function(resolve){
        resolve("Page login loaded")
    })
}
function enterCredentials(){
    return new Promise(function(resolve){
        resolve("credentials enetered")
    })
}
function clickLogin(){
    return new Promise(function(resolve){
        resolve("Logged in successfully")
    })
}
openBrowser().then(function(msg){
    console.log("step 1 - successfully opened a browser", )
    return openBrowser
    
}).then(function(msg){
    console.log("step 2 - successfully logged in to the page")
    return goToLogin
    
}).then(function(msg){
    console.log("step 3 - Entered the credentials");
    return enterCredentials
    
}).then (function(msg){
    console.log("step 4 - click log in")
    return clickLogin

}).catch(function(error){
    console.log("Error", error);
    
}).finally (function(){
    console.log("Done executiion");
    
})