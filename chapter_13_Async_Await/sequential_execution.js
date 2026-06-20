//when step 2 depends on step 1's result , you must run them sequentially
//step - step 2
function apiCall(name){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(name, "200 ok")
        }, 1000)
    })
}
async function sequentialTest(){
    console.log("starting of the test");
    let start = Date.now();

    let r1 = await apiCall ("Login")
    console.log(r1);

    let r2 = await apiCall ("Dashboard")
    console.log(r2);

    let r3 = await apiCall ("Report")
    console.log(r3);
    
    console.log("Time: ~" + (Date.now() - start) + "ms");
    
    
}
sequentialTest()

async function riskyTest(){
    try{
        let data = await Promise.reject("Element not found")
        console.log(data);
    } catch (err){ //reject will call catch
        console.log("Test failed:", err);
        
    }
        
}
riskyTest()
