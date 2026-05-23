// take user input for two numbers
let number1 = Number(prompt("Enter the value of number1: "));
let number2 = Number(prompt("Enter the value of number2: "));

// take user input to select an operator 
const operator = prompt("Enter a operator ( either +, -, * or / ): ");

switch(operator) {

    case "+":
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break; 

    case "-":
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case "*":
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case "/":
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log("Invalid operator");
}


let responseCode = 404
switch(responseCode){
    case 200:
        console.log("200, ok")
        break
    case 404:
        console.log("404, Not found") 
        break
    default:
        console.log("no status code match")
}

let browser ="edge"
switch(browser){
    case "chrome":
    case "Edge":
    case "Brave":
    case "edge":
        console.log("chromium project")
        break
    case "firefox":
        console.log("Mozilla project")
        break
    case "safari":
        console.log("Apple Browser")
        break
    default:
        console.log("unknown browser")
    
}