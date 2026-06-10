/* 
Exercise 1 : API Response Validation
You receive an array of API response codes. Write code to:
1.Check if ALL responses are successful (200–299)
2.Find the FIRST non-success / error code
3.Return all unique error codes
let responses = [200, 201, 404, 500, 404, 200, 503];

// every() - it returns boolean value ie true or false
// find() - search element from left to right and find its first item and doesn't look the other item
//filter() - goes through entire array and creates a new array that passed the test
*/
// const responses = [200, 201, 404, 500, 404, 200, 503];
// const allSuccessful = responses.every(code => code >= 200 && code < 300);
// const firstError = responses.find(code => code < 200 || code >= 300);
// const uniqueErrors = [...new Set(responses.filter(code => code < 200 || code >= 300))];

// console.log("All successful?", allSuccessful);
// console.log("First error code:", firstError);
// console.log("Unique error codes:", uniqueErrors);

/* 
Exercise 1 : API Response Validation
You receive an array of API response codes. Write code to:
1.Check if ALL responses are successful (200–299)
2.Find the FIRST non-success / error code
3.Return all unique error codes
let responses = [200, 201, 404, 500, 404, 200, 503];
*/
const response = [200, 201, 404, 500, 404, 200, 503]
const allSuccessful = response.every(code => code >= 200 && code<=300)
console.log("All are successful..?", allSuccessful);

const nonSuccess = response.find(code => code < 200 || code>=300)
console.log("Non-success", nonSuccess);

const errorCodes = response.filter(code=> code < 200 || code>=300 )
const uneequeErrorCodes = [...new Set(errorCodes)]
console.log("unique error codes:",uneequeErrorCodes );

//-----------------------------------------------------------------------------------------------------------------------------------------------
//spot the bug
//What is wrong with this code? Fix it.
let responseTimes = [320, 85, 1200, 450, 99];// 1200, 320,450,85,99
let sorted = responseTimes.sort();
console.log("Fastest:", sorted[0]);

let responseTimes1 = [320, 85, 1200, 450, 99];// 1200, 320,450,85,99
let sorted1 = responseTimes1.sort((a,b) => a-b );
console.log("Fastest Ascending:", sorted1[0]);

let responseTimes2 = [320, 85, 1200, 450, 99];// 1200, 320,450,85,99
let sorted2 = responseTimes2.sort((a,b) => b-a );
console.log("Fastest Descending:", sorted2[0]);

//-----------------------------------------------------------------------------------------------------------------------------------------------
//Exercise 3 — Deep vs Shallow Copy (Tricky)
//What is the output and why? How would you fix it?
let suite1 = [{ name: "login", status: "pass" }];
//let suite2 = [...suite1];
let suite2 = structuredClone(suite1);
suite2[0].status = "fail";
console.log(suite1[0].status);

//-----------------------------------------------------------------------------------------------------------------------------------------------
//Example -4 
//1. What is the output?
console.log(greet("Shivam"))
function greet(name){
    return `Hello, ${name}`
}
//a) ReferenceError b) undefined c) "Hello, Shivam!" d) TypeError

//Example - 5
//2. What is the output?
//console.log(getStatus(200));
console.log(getStatus(200));
const getStatus = (code) => code >= 200 ? "ok" : "error";
//a) "ok" b) "error" c) undefined d) ReferenceError

const getStatus = (code) => code >= 200 ? "OK" : "error"
console.log(getStatus(200));



//Example - 6
//What does this function return?
function analyze(scores = []) {
  return scores.filter(s => s >= 70).length;
}
analyze();
//a) undefined b) 0 c) null d) TypeError

//Example - 7
//What is the output?
function makeCounter() {
  let count = 0;
  return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log(counter());

//Example - 8
//a) 1 b) 2 c) 3 d) 0/*
// Which is a pure function? 
// a) function log(msg) { console.log(msg); } 
// b) function add(a, b) { return a + b; } 
// c) function getTime() { return Date.now(); } 
// d) function push(arr, val) { arr.push(val); return arr; }
// write answer is B 

function log(msg) { 
    console.log(msg)
}

function getTime() { 
    return Date.now(); 
} 


//Example - 9 
//What is the output?
function test(...args) {
  return args.length;
}
test("login", "pass", 200, true);
//a) 1 b) undefined c) 4 d) TypeError

//Example - 10
//What is the output?
const obj = {
  env: "staging",
  getEnv: () => {
    return this.env;
  }
};
console.log(obj.getEnv());
//a) "staging" b) undefined c) null d) TypeError

const obj = {
    env : "staging",
    getEnv (){
        return this.env
    }
}
console.log(obj.getEnv());

//Example - 11
//What does this return?
function double(n) {
     return n * 2; 
    }
function addOne(n) { 
    return n + 1;
 }
[1, 2, 3].map(double).map(addOne);
//a) [2, 4, 6] b) [3, 5, 7] c) [2, 3, 4] d) [4, 6, 8]

//Example - 12
//What is the output?

function run(fn) {
  return fn("Login");
}
console.log(run(name => `Running: ${name}`));
//a) TypeError b) "Running: Login" c) undefined d) "name => Running: name"


//Example - 13
// What is the output?

function outer() {
  let x = 10;
  function inner() {
    let x = 20;
    return x;
  }
  return x + inner();
}
console.log(outer());
//a) 20 b) 30 c) 40 d) 10