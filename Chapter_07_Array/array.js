//Array - group /collection of elements.
// javascript arrays are dyanamic and can hold mixed values

let fruits = {} // Empty array
let fruits_fresh = ["apple", "banana", "guava"]


//array works with indexes - 0,1, 2 
let arr= [10,20,30,40,50]
console.log(arr.length) // length starts from 1 and indexes start from 0
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])




let testResults = ["pass", "fail", "skip", "fail"]
let mixed =[1, "hello", true, null];// JS array can hold any type

//creating array

//Array literals preferred
let browsers =["chrome", "firefox", "safari"]
console.log(browsers[1])
console.log(browsers[1].length);

let arr1 = ["shivamMahato", "satyam K", "barsha", "sapana"]
console.log(arr1[0])
console.log(arr1[0].length)
console.log(arr1[1])
console.log(arr1[1].length)

//Array constructor
let scores = new Array(3) // creates empty array
let scores2 = new Array (1, 2, 3) // creates [1, 2, 3]
console.log(scores2)
console.log(scores)

let test = Array.of(10,20,30,40,50) // of - use array inside the array same as above
console.log(test)
console.log(test[0])

//Array.from()
let chars = Array.from("hello"); // ["h", "e","l", "l", "o"]
console.log(chars)

let str = Array.from("shivam")
console.log(str)