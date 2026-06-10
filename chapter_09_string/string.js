/* 
Strings - sequence of character used to represent text
In testing string are everywhere -> URLs, selector, assertion, response message, log , parsing
*/
let url = "https://app.vwo.com"
let status = 'pass'
let message = `Test complete` //template literals

let name = "shivam"
let message = `Hello ${name} and 2 + 2 = ${2 + 2}`
console.log(message);

console.log(String("200"))

let string = "shivam"
console.log(true);

/*
 String properties 
*/
let str = "MonasticA"
console.log(str.length);//length always start with 1

console.log(str[0]);
console.log(str[5]);
console.log(str[14]);
console.log(str.at[-20]);
console.log(str.at(-6)); //position from 
console.log(str.at(-8))
console.log(str.at(-9));
console.log(str.charCodeAt(-9));
console.log(str.charCodeAt(-1));
