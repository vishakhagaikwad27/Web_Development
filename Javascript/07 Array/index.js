// let arr = [1, 4, 5, 6, 9]
// //Index    0  1  2  3  4

// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

/*  Convert Array To String
let arr = [1, 4, 5, 6, 9]
   
arr[0] = 5666;

console.log(arr.toString())

*/

// let numbers = [1,2,3,4,5]
// numbers.splice(1,2)
// numbers.splice(1,3)
// numbers.splice(1,3,222,333)


let a = [1, 93, 5, 6, 88]

for(let index = 0; index < a.length; index++){
    const element = a[index];
    console.log(element)
}

a.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})


for(const key in obj){
    if(Object.hasOwnProperty.call(obj,key)){
        const element = obj[key];
        console.log(element)
    }
}

let newArr = arr.map((e)=>{
    return e**2
})


console.log(newArr)
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))

let arr2 = [1, 2, 3, 4, 5, 6]
const red = (a, b)=>{
    return a + b
}
console.log(arr2.reduce(red))