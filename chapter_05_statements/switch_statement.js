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
