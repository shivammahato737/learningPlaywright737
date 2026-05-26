//sorting

let fruits =["banana", "apple", "cheerry"]
fruits.sort()
console.log(fruits)

let fruits1 =["111", "app233le", "cheer425ry"]
fruits1.sort()
console.log(fruits1)

let nums =[10, 1, 21, 2]
nums.sort()     //it compares as a string
console.log(nums)
//Or
console.log(nums.sort((a,b) => a -b)) // compares two numbers and then sort
//console.log(nums.sort((a,b) => a -b))// Ascending
console.log(nums.sort((a,b) => b - a))// Descending
//sort converts number into a string in javascript

let arr =[1,2,3]
let copy =arr;
copy.push(4);
console.log(arr.length);



