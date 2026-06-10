//switch
//0-sunday, 1-monday, 2-tuesday, .......
let day =2787
switch(day){
    case 0:
        console.log("today is sunday")
        break;
    case 1:
        console.log("today is Monday")
        break;
    case 2:
        console.log("today is Tuesday")
        break;
    case 3:
        console.log("today is Wednesday")
        break;
    case 4:
        console.log("today is Thursday")
        break;
    case 5:
        console.log("today is Friday")
        break;
    case 6:
        console.log("today is Saturday")
        break;
    default:
        console.log("Invalid last day")
}


    
let trafficLight = "hsdshsdh";
switch(trafficLight){
    case "red":
        console.log("stop walking")
        break
    case "yellow":
        console.log("prepare to stop")
        break
    case "green":
        console("proceed to go")
        break
    default:
        console("be home be safe")  

}

let trafficLight = "green";
let message = ""
 
switch (trafficLight) {
    case "red":
        message = "Stop immediately.";
        break;
    case "yellow":
        message = "Prepare to stop.";
        break;
    case "green":
        message = "Proceed or continue driving.";
        break;
    default:
        message = "Invalid traffic light color.";
}
 console.log(message)
 
// Output: Proceed or continue driving.

let fruits = "Apple1"
switch(fruits){
    case "Mango":
    console.log("I love Mango");
    break
    case "Papaya":
        console.log("I love papaya");
    break
    case "PineApple":
        console.log("I love Pineapple");
    break
    case "Apple":
        console.log("I love Apple");
    break
    default:
        console.log("I love every fruits");
    }




    let day = 5
    switch(day){
        case 0:
        console.log("today is sunday");
        break
        case 1:
        console.log("today is Monday");
        break
        case 2:
        console.log("today is Tuesday");
        break
        case 3:
        console.log("today is Wednesday");
        break
        case 4:
        console.log("today is Thursday");
        break
        case 5:
        console.log("today is Friday");
        break
        case 6:
        console.log("today is saturday");
        break
        default:
        console.log("Are you dumb why are u giving more than 7 ");
        
    }

let fruit = "Apple";
switch (fruit) {
  case "Banana":
    console.log("It's a banana.");
    break;
  default:
    console.log("Fruit not found.");
    
    // Notice there is no 'break' here!
  case "Orange":
    console.log("It's an orange.");
    break;
}

let n = 10, i =1, fact = 1
while(i<=n){
    factFact = fact*i
    i++
}
console.log("the factoral is:" , fact);
console.log(`the factorial is: ${fact}`);


let n=10, i=1, fact=1  
while(i<=n)  
{  
  fact = fact*i   
  i++  
}  
console.log("The factorial of a number is", fact) 

