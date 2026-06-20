async function testApI(){
    try{
        let result = await Promise.reject("503 service unavailable")
        console.log(result);
        
    }catch (error){
        console.log('Error',error);
        
    }finally{
        console.log("clean Up");
        
    }
}
testApI()

async function testApI(){
    try{
        let result = await Promise.resolve("503 service unavailable")
        console.log(result);
        
    }catch (error){
        console.log('Error',error);
        
    }finally{
        console.log("clean Up");
        
    }
}
testApI()