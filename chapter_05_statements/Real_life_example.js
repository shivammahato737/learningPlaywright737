let isLoggedIn = true;
let userRole  = "viewer";
//viewer = limited view
//editor can edit and view
//admin can do all the things
if(isLoggedIn){
    if(userRole ==="admin"){
        console.log("you have all the acess")
    }else if(userRole === "editor"){
        console.log("welcome editor - edit access granted")
    }else if(userRole === "viewer"){
        console.log("welcome viewer - Read only access")
    }else {
        console.log("No idea which role you are in")
    }
}else{
    console.log("you are not logged in")
}

if("hello") 
    console.log("string is truthhy")

if(42){
    console.log("it will print")
}

if({}){
    console.log("it will print")
}

if([]) {
console.log("it will print")
}


//false 

if(0){
    console.log("won't preint")
}

if(""){
    console.log("wont print")
}

if(null){
    console.log("won't print")
}

if(undefined){
    console.log("won't print")
}

if(NaN){
    console.log("won't print")
}