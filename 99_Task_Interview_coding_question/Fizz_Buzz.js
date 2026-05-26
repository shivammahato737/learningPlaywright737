//FizzBuzz test:
//write a program that prints from 1 to 100
//However, for multiples of 3, print "Fizz" insted of number,
//for multiples of 5, Print "Buzz" for numbers
//and multiples of both 3 and 5, print "FizzBuzz"

for (let i=1; i<=100; i++){

    if(i%3 ===0 && i%5 ===0 ){
        console.log("FizzBuzz")
    }

    else if(i%3 ===0){
        console.log("Fizz")

    }else if(i%5===0){
        console.log("Buzz")

    }else {
        console.log(i)
    }
}