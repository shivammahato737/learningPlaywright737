//for loops - loops repeat a block of code multiple time
//ICU - initiliaze-> condition-> Updation(Incr/decre)
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);

let a= 10;
//a=a+1 =a++
let b = a++
console.log(b)

let c = 11
let d = ++c
console.log(d)

let a =10
let b= ++a
console.log(a)
console.log(b)

let a1 = 10
console.log(a1++ + a1) 


let a = 10
console.log(a++ + ++a + --a + a++) //22
console.log(a)

let a = 10
console.log(a++ + ++a)
console.log(a)

let a = 10
let r = a++
console.log(r)

let a = 5;
let b = a++ + ++a
let c = a++ + ++a + ++a + ++a + a++
console.log(a)
console.log(b)
console.log(c)

for(let i=1; i<=3; i++){
    console.log(i)
}

for (let j=1; j<=3;++j){
    console.log(j)
}

for (let shivam=1; shivam<=3;shivam++){
    console.log(shivam)
}

for (let _1 = 0; _1<=10; _1++){
    console.log(_1)
}

for (let shivam = 0; ;shivam++){
    console.log(shivam)
}

for(let shivam = 0; shivam < 18; shivam++){
    if(shivam > 15){
        console.log("gift of laptop")
    }else{
        console.log("no gift") 
    }
}