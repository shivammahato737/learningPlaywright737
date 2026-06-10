//search and check
let url ="https://www.facebook.com"
console.log(url.includes("staging"));
console.log(url.includes("production"));
console.log(url.includes("facebook"));

//starts with and ends with
console.log(url.startsWith("h"));
console.log(url.endsWith("m"));

console.log(url.indexOf("m"));
console.log(url.lastIndexOf("m"));

console.log(url.search("com")); //

let str = "Pass"
console.log(str.trim().toLowerCase())
//console.log(str.trim().toLocaleLowerCase())

let str = "PASS"
console.log(str.trim().toLowerCase())

let str = "pass, fail, skip"
console.log(str.split(",").length);

let str = "hello"
str[0] = "H"
console.log(str);

/*what does this return 
"Error: 404 Not found".match(/\d+/g)*/







