//Iterate -> go from one to another(traversing)
let tests = ["login", "checkout", "search"]
for(let i=0; i<tests.length; i++){
    console.log(tests[i])
}

//for ...of (cleanest for values)
for(let test of tests){
    console.log(test)
}

//forEach (no return values)
tests.forEach((test,index) => {
    console.log(`${index}:${test}`) //template literals
})

console.log("-------------------------")

//entries() -> index + value
for (let [i, test] of tests.entries()){
    console.log(i, test)
}

let students =["shivam", "amit", "zian", "bikash"]
for(let student in students){
    console.log(student , "->" , students[student])
}
 // in and of || of - gives value and in gives index