///Merge two Maps → print all pairs

let emply1 = new  Map([
    ["name","Diya"],
    ["age","20"]
]);

let emply2 = new Map([
    ["City","Satara"],
    ["Mob No",8542569542]
]);

let EmployeInfo = new Map([...emply1,...emply2]);

for(let [key , value]of EmployeInfo){
    console.log(key + " => " + value);
}