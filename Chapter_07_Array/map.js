let scores =[56, 78, 98, 45, 93, 78]
//let sum = scores.reduce((total, currentScore)=> total + currentScore, 0) //448
console.log(sum )//

//map -> transform every element and return new array
let grade = scores.map(s =>s>70 ? "pass" : "fail");
console.log(grade)

//filter -> keeps elements that pass a test(reduce the value)
let passingMarks = scores.filter(s => s >=70)
console.log(passingMarks)

// let scores = [56, 78, 98, 45, 93, 78];
// let sum = 0;
// for (let score of scores) {
//     sum += score; // This is the same as: sum = sum + score
// }
// console.log(sum); // Outputs: 448

let scores =[56, 78, 98, 45, 93, 78]
//reduce - > accumulates to a single value
let total = scores.reduce((sum, s) => sum + s, 0)
console.log(total)

//flat -> 
let nested = [[1 ,2], [2, 4], [3,4], [5, 6]]
console.log(nested.flat());
