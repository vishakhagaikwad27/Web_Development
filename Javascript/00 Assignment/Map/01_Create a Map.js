//Create a Map → key: studentName, value: marks → print all using for…of
 
let StudentMarks = new Map([
    ["Trupti",80],
    ["Samita",79],
    ["Akshada",81]
]);
for(const [Student,marks]of StudentMarks){
    console.log(`${Student}:${marks}`);
}