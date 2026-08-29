// foreach, map
// foreach

let fruits = ["apple", "Banana", "Mango", "Jackfruit"];

let newFruits = fruits.forEach((f, idx) =>{

    console.log(`${idx+1} -> ${f}`);
    // return `${idx+1} -> ${f}`; foreach can't return
});

let newFruits2 = fruits.map((f, idx) =>{

    console.log(`${idx+1} -> ${f}`);
    //  return `${idx+1} -> ${f}`; 
});

console.log(newFruits)

let newFruits3 = fruits.map((f)=> f.toLowerCase());

console.log(newFruits3, "\n", fruits);


let customFruits = fruits.filter((f)=> f.length>5);

console.log(customFruits);