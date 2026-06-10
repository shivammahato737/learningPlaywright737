//Task 1 - Print "Hello" 5 times
for (let i = 0; i<5; i++){
    console.log("Hello");
    
}

//Task 2 : -  Print numbers from 1 to 10
for (let i=1; i<=10; i++){
    console.log(i)
}

//Task 3:- Print even numbers from 1 to 20
//first method
for(let i =2; i<=20; i+=2){
    console.log(i);
}

for (let i = 1; i <= 20; i += 2) { //odd
    console.log(i);
}

//second method
for(i=1; i<=20; i++){
    if(i%2==0){
        console.log(i);
        
    }

}
//odd number
for(let i = 1; i<=20; i++){
    if(i%2==1){
        console.log(i);
        
    }
}

//Task - 4 - Print the sum of first 10 natural numbers 
let totalSum = 0
for(let i = 1; i<=10;i++){
    //totalSum += i // totalSum = totalSum+i
     totalSum = totalSum+i
}
console.log(totalSum);

//Task - 5 - Print the multiplication table of 5
const number = 5
for(let i =1; i<=20; i++){
    const result = number * i
    console.log(`${number} * ${i} = ${result}`);
}

const number = 7
for(let i =1; i<=10; i++){
    const result = number * i
    console.log(`${number} * ${i} = ${result}`);
    
}

const number = 15
for(let i =1; i<=10; i++){
    const result = number * i
    console.log(`${number} * ${i} = ${result}`);
    
}

