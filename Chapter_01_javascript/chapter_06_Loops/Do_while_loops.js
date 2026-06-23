//while loops - it will not run until the condition is true
// I - init - outside
// C - condition (to get into the while)
// U - Updation

//Do_while loops - run atleast once and also checks happens after each run
//condition we are checking in the end

let retry = 0;
do{
    console.log("execute a code")
    console.log("Retrying........,", retry)
    retry++
} while (retry < 3)


let i=0
do{
    console.log("hello dosto")
    console.log("I am shivam", i)
    i++
}while(i > 5)
