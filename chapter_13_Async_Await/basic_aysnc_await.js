async function getTestResult (){
    return "pass"
}

//async function always returns a promise
getTestResult().then(function(result){
    console.log(result);
    
})

async function runTest(){
    let result = await Promise.resolve("login test passed")
    console.log(result);

    let result2 = await Promise.resolve("Dashboard test passed")
    console.log(result2);
    
}
runTest()