// let name = ["Asif", "Ashik", "Samia", 2, true, {}]; // we can put different type in same array
let name = ["Asif", "Ashik", "Samia"];

name.push("Emad"); // add to the end

console.log(name); 

name.pop(); // remove from back
console.log(name);

name.unshift("Arif"); // insert at 0th index
console.log(name);

name.shift(); // remove from 0th index
console.log(name);

// splice (startindex, deleteCount, Elements to insert one by one seperated by comma)

name.splice(1,0,"Emad");

console.log(name);

