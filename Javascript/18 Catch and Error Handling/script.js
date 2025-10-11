let a = prompt("Enter first Number")

let b = prompt("Enter Second Number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError ("Sorry this is not allowed")
}

let Sum = parseInt(a) + parseInt(b)

function main(){
let x = 1;
try {
    console.log("The sum is ", Sum * x)
    return true

} catch (error) {
    console.log("Error")
    return false
}

finally{
    console.log("Files are being closed and db connection is being closed")
}
}

let c = main()