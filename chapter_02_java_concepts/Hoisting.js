//Hoisting - 

console.log(name) //
var name = "shivam"
console.log(name)

console.log(name)
let name1 ="shivam"
console.log(name1)

var a =  undefined
var b = undefined

console.log(a)
//let a = "shivam" - cannot access with a before initilize
var a ="shivam" //hoisting only works with var
console.log(a)
   

//Hoisting example with function
function getUserID(){
    //var status_code = undefined - not shown to you.
    console.log(status_code)
    var status_code = "Active"
    console.log(status_code)
}
getUserID()


function checkAccess(){
    console.log(Entry_pass)
    var Entry_pass = "Active"
    console.log(Entry_pass)
}
checkAccess()

//Hoisting with let keywords
console.log("shivam is awesome")
console.log("shivam is awesome")
console.log("shivam is awesome")
console.log("shivam is awesome")
let username ="Mahato"
console.log("shivam is awesome")
console.log("shivam is awesome")
console.log("shivam is awesome")
console.log(username)