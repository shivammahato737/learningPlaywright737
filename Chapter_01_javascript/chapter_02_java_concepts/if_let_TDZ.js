let x = "positive"
if(true){
    let x="negative"
    console.log(x)
}
console.log(x)

//TDZ - temporal dead zone
let s1="shivam"
if(true){
    console.log(s1) // local variable , TDZ-becoz a is not assigned
    let s1 = "temp"
}

let myName2 = "shivam"
if(true){
    console.log(myName)
    var myName ="mahato"
}
console.log(myName2)

let uname = "shivam"
if(true){
    console.log(uname) //local variable TDZ
    let uname ="mahato"
}

var z ="shivam"
if(true){
    console.log(z)
    var z = "Mahato"
    console.log(z)
}