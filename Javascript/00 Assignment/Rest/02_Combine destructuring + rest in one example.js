///Combine destructuring + rest in one example.

let Num = [10,20,30,40,50];
let [first,second,...rest] = Num;

console.log(first);
console.log(second);
console.log(rest);