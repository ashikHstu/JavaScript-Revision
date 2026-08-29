// find
let fruits = ["apple", "Banana", "Mango", "Jackfruit"];
let customFruit = fruits.find((f) => f.length>5)

console.log(customFruit)

// includes
let findFr = fruits.includes("Mango"); //true, false

console.log(findFr);

// sum

let students = [
    {name: "ashik",marks: 33 },
    {name: "asif", marks: 55},
    {name: "Samia", marks: 44},
];

let studentCheck = students.some((s)=>s.marks>80);
let studentCheckEvery = students.every((s)=>s.marks>30);

console.log(studentCheck, studentCheckEvery)