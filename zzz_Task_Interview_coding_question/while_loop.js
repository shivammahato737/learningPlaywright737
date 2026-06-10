// 1️⃣ Print "Playwright" 5 times
let count = 1
while(count<=5){
    console.log("PlayWright");
    count++
    
}// 2️⃣ Print numbers from 1 to 10
let num = 1
while(num<=10){
    console.log(num);
    num++
    
}

// 3️⃣ Print even numbers from 1 to 20
let num = 2
while(num<=20){
    console.log(num);
    num+=2

    
}
//OR
let num = 1
while(num<=20){
    if(num % 2 == 0){
        console.log(num);
        }
        num++
}

//ODD
let num = 1
while(num<=20){
    if(num % 2 == 1){
        console.log(num);
        }
    num++
    
}

// 4️⃣ Calculate sum of first 10 natural numbers
let n = 1
let totalSum = 0 // this is accumulator
while(n<=10){
    totalSum += n
    n++

}
console.log("the sum is:" , totalSum);


// 5️⃣ Print the multiplication table of 7
let multiplier = 1 // th
const baseNumber = 7
while (multiplier<=10){
    let result = baseNumber * multiplier
    console.log(`${baseNumber} * ${multiplier} = ${result}`);
    multiplier++
}