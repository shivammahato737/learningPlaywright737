
//An array in object is always be truthy in JS
if([]){
    console.log(true)
}

//case 1:
let response;
if(response){

}
//case 2:-
//case 2 is true because it catches both null and undefined
let response
if(response !== null){
}

//case 3:
let  