console.log("Hey This is Conditional Statement Tutorial")

let age = 1;
/*let grace = 2;

age += grace

console.log(age+grace)
console.log(age-grace)
console.log(age*grace)
console.log(age/grace)
console.log(age**grace)
console.log(age%grace)*/

/*if((age) > 18)*/
/*if((age) == 18)*/
/*if((age) != 18)*/
if((age) == 18){
    console.log("You Can Drive")
}

else if(age == 0){
    console.log("Are You Kidding?")
}

else if(age == 1){
    console.log("Are You Again Kidding?")
}

else{
    console.log("You Cannot Drive")
}

a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

/*
Translates to:
if(a > b){
let c = a - b;
}
else{
let c = a - b;
}
*/