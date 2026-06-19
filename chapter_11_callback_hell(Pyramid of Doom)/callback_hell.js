function openBrowser(callback){
    console.log("opening the browser");
    setTimeout(function(){
        console.log("step 1 - browser starting..");
        callback()
        

    }, 500)
    
}
function goToLoginPage(callback){
    //console.log("opening the browser");
    setTimeout(function(){
        console.log("step 2 - Login page loaded.");
        callback()
        

    }, 500)
    
}
function enterCredentials(callback){
    //console.log("opening the browser");
    setTimeout(function(){
        console.log("step 3 - Credentials entered..");
        callback()
        

    }, 500)
    
}
function clickLogin(callback){
    //console.log("opening the browser");
    setTimeout(function(){
        console.log("step 4 - Login button clicked..");
        callback()
        

    }, 500)
    
}
openBrowser(function(){
    goToLoginPage(function(){
        enterCredentials(function(){
            clickLogin(function(){
                console.log("test complete");
                

            })

        })


    })


})