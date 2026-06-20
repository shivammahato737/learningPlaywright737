(async function (){
    let msg = await Promise.resolve("Quick async test")
    console.log(msg)
    
})() 
console.log("outside");
