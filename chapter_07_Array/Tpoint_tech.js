let country = ["india", "pakistan", "Austraila"]
for(let i=0; i<country.length; i++){
    console.log(country[i]);
    
}

let num =0;
let country = new Array();
country[0] = "Australia"
country[1] = "Pakistan"
country[2] = "India"
for(num; num<country.length;num++){
    console.log(country[num]);
    
}

let fruits = ["Apple", "banana", "mango"]
console.log(Array.isArray(fruits))

let Not_fruits = "Appple"
console.log(Array.isArray (Not_fruits))

//for each
let fruits = ['apple', 'banana', 'cherry'];  
fruits.forEach((fruit, index) => {  
    console.log(`Fruit at index ${index} is ${fruit}`);  
});  

//for...of 
const Actors = ["salman", "Arjun", "priynaka"]
for(const Actor of Actors){
    console.log(Actor);
    
}

//for... in
const heroes = ["batman", "spiderman", "superwoman"]
for(const index in heroes ){
    console.log(`index: ${index} ${heroes[index]}`);
    
}

const heroes = ['Batman', 'Superman'];
heroes.universe = 'DC'; // Adding a custom property to the array object

// for...in will print: 0, 1, universe (Wait, 'universe' isn't a hero!)
for (const key in heroes) {
    console.log(key); 
}

// for...of will print: Batman, Superman (Safe and expected!)
for (const hero of heroes) {
    console.log(hero); 
}

let cleanFruit = ["mango", "pineApple"]
let freshFruit = ["apple", "banana"]
//concat
let allFruits = cleanFruit.concat (freshFruit)
console.log(allFruits);

let cleanFruit = ["mango", "pineApple"]
let freshFruit = ["apple", "banana"]
//spread
let allFruits = [...cleanFruit, ...freshFruit]
console.log(allFruits);
    
console.log("JavaScript's Promise Chaining Function");  
let promise_variable = new Promise((resolve, reject) => {  
resolve("JavaScript chaining");  
});  
promise_variable  
.then( function (resultInfo1){  
console.log(resultInfo1);  
return new Promise((resolve,reject) =>{  
resolve("TpointTech");  
})  
})  
.then((resultInfo2) => {  
console.log(resultInfo2);  
return new Promise((resolve,reject) =>{  
resolve("TutorialsAndExamples");  
})  
})  
.then((resultInfo3) => {  
console.log(resultInfo3);  
});  

varx=5,y=1  
var obj ={ x:10}  
with(obj)  
{  
      alert(y)  
}  