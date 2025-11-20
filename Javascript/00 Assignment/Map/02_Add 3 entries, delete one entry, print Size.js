///Add 3 entries, delete one entry, print .size.


let StudentMarks = new Map();

StudentMarks.set("Vaidehi",70);
StudentMarks.set("Priya",95);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
StudentMarks.set("Trupti",80);


//console.log(StudentMarks);
StudentMarks.delete("Priya");
console.log(StudentMarks);
console.log("Size Of Map",StudentMarks.size);