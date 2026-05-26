let arr =[1,2,3,4,5]
//slice(start, end) - returns new arraym, does not mutate
console.log("Answer of 1,3 ->",arr.slice(1,3))//
console.log("Answer of 1,4 ->",arr.slice(1,4))
console.log("Answer of 4,3 ->",arr.slice(4,3))
console.log("Answer of 3,4 ->",arr.slice(3,4))
console.log("Answer of 1,5 ->",arr.slice(1,5))
console.log("Answer of -2 ->",arr.slice(-2))
console.log("Answer of -3 ->",arr.slice(-3))
console.log("Answer of -7 ->",arr.slice(-7))
console.log("Answer of 3 ->",arr.slice(3))
console.log("Answer of 2 ->",arr.slice(2))//if u don't give the end then it will automatically take start to end
console.log("Answer of 3 ->",arr.slice(0))

//concatenation -> 
let a =[1, 3]
let b =[3, 6]
let c = a.concat(b, [5, 6])
let c1 = a.concat(b)
console.log(c)
console.log(c1)

//spread (modern way) - concatenation
let a =[1, 3]
let b =[3, 6]
let d = [...a, ...b];
console.log(d)

//join
let s = ["Shivam", "kumar", "Mahato"].join("=")
console.log(s);

let p = ["cloud", "spoon", "rabbit"].join(" ? ")
console.log(p);

