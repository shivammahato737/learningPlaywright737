//score 90-100 -A
//score 80-89 - B
//score 70-79 - C
//score 60 - 69 - D
//score 0-59 - F
//Invalid - error message

let grade;
let score ="uiiwdbds"

if(score<0 || score>100){
    console.log("Are you dumb, why are you giving value than 100")
    return;
}

if(typeof score !=="number"){
    console.log("Are you dumb, why are u giving score as string")
    return;
}


if(score>=90){
    grade = "A"
}else if(score>=80){
    grade = "B"
}else if(score>=70){
    grade = "C"
}else if(score>60){
    grade = "D"
}else{
    grade ="F"
}
console.log("For the score" , score , "the grade is ->", grade)