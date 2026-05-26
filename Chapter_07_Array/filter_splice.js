
//The filter() method creates a new array filled with all the elements
let num = [5,12,8,130,49]
let bigNum = num.filter(num => num>10);
console.log(bigNum)
console.log(num)

//The splice() method allows you to cut into the array to remove items, 
let fruits = ["apple", "banana", "cherry", "date"]; 
let removedFruits = fruits.splice(1, 2) // Start at index 1 ("banana") and delete 2 items
console.log(removedFruits)
console.log(fruits)