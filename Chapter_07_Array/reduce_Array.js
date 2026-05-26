//reduce ->takes an array with many items, 
// rolls over them one by one, and squishes them 
// all together into one single output value.
let results =["pass", "fail", "pass"]
let counts = results.reduce((acc, r) =>{
    acc[r] = (acc[r] || 0) +1
    return acc
}, {})
console.log(counts.pass)


const cartPrices = [15.99, 20.00, 5.50, 10.00];
const grandTotal = cartPrices.reduce((acc, curr) => acc + curr, 0);
console.log(grandTotal); 
// Output: 51.49