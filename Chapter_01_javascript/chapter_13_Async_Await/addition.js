async function add (a, b){
    return a + b
}
async function main(){
    let result = await add(10, 20)
    console.log("sum", result);

    let result2 = await add(result, 30)
    console.log("Total", result2);
    
}
main()