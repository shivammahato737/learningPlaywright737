//Accessing & Modifying
let calls = ["pass", "fail", "genius"]
console.log(calls [0])
console.log(calls[2].length)

//at - specify items from array using its index number
console.log(calls.at(-1))
console.log(calls.at(-2))
console.log(calls.at(-3))
console.log(calls.at(-4))
console.log(calls.at(2))
console.log(calls.at(0))


let calls = ["pass", "fail", "genius"]
//Modify
calls[1] ="shivam"
calls[2] = "Mahato"
console.log(calls)

let fruits_bunch = ["Apple", "Banana", "Guava", "watermelon"]
fruits_bunch[1] ="Dragon Fruit"
console.log(fruits_bunch)
console.log(fruits_bunch.length)
fruits_bunch[3] = "cucumber"
console.log(fruits_bunch)

//push -> //add to the end
let arr = [1, 2, 3, 5, 6]
arr.push(10, 20)
console.log(arr)

//pop -> remove from end
arr.pop(20, 30)
console.log(arr)

//add to the begginning
arr.unshift(0)
console.log(arr)

//remove from the beginning
arr.shift();
console.log(arr);

//splice (start , delete)
let arr = [1, 2, 3, 5, 6]
arr.splice (2, 1) //index 2 remove 1 element
console.log(arr)

//splice (start , delete)
let arr = [1, 2, 3, 5, 6]
arr.splice (1, 2) //index 1 remove 2 element
console.log(arr)

//splice (start , delete)
let arr = [1, 2, 3, 5]
arr.splice (1, 2) //index 1 remove 2 element
console.log(arr)

let arr = [1, 2, 3, 5, 6]
arr.splice(2, 0, 99)//from index 2, remove nothings just add 99
console.log(arr)

let arr = [1, 2, 3, 5, 6]
arr.splice(1,2,10,20)//from index 1, 2 number should remove and add (10,20)
arr.splice(1,2,10,20,30)
console.log(arr)
