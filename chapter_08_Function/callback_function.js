function runtest(testName, callback){
    let result = "pass"
    callback(testName, result )

}
function onComplete(name, result){
    console.log(`${name} finished with : ${result}`);
    
}

runtest("loginTest" , onComplete)



function shivam_doing_work(worker, callback){
    console.log("started the class PW");
    
    let work = worker
    //
    console.log("finished the class");
    
    callback()
}
function callWife(){
    console.log("call wife when done");
    
}
shivam_doing_work("PW class", callWife)

//callbck
function placeOrder(item, callback){
    console.log(".....placing ordeer");
    callback()
    
}
function print(){
    console.log("done with the ordder");
    
}
placeOrder("", print)

