class BaseText{
    setup(){
        console.log("Base : Open a Browser");
        
    }
}
class APITest extends BaseText{
    setup(){
        console.log("API Test: open browser");
        
    }
}
let test = new APITest()
test.setup()