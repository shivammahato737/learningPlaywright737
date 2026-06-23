let a = {status : "pass"}
console.log(a)
console.log(a["status"])
console.log(a.status);

//keys are case-sensitive
let a1 = {status:"pass", Status: "fail"}
console.log(a1.status)
console.log(a1.Status)
console.log(a1[Status]);


let obj = {name:"Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
/*
JSON
const t = {
  "name" : "shivam"
  "age" : 17
 
}
console.log(t) 
*/

//using let
let person = {
  name : "Shivam",
  age  : 26,
  city : 'Hyderabad'
};

//using new keyword
function person(name, age , city){

  this.name = name;
  this.age = age;
  this.city = city

}
//creating a new instance of person
let person1 = new person("shivam", 30, "new delhi")
let person2 = new person("kumar", 24, "jaipur")
