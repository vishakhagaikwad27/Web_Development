let random = Math.random()
let a = prompt("Enter first Number")
let c = prompt("Enter Operation")
let b = prompt("Enter Second Number")


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

console.log(random)
if(random > 0.1){
    //Perform Correct Calculation
    console.log(`The Result is ${a} ${c} ${b}`)
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    //Perform wrong Calculation
    c = obj[c]
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`)
}