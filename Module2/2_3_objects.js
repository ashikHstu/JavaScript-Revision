// In JavaScript is key-value pair. 
let user = {
    name: "Ashik", 
    age : 25,
    address: "Dhaka, Bangladesh",
};

// console.log(user.name);
console.log(user["name"]);

delete user.address;
console.log(user);

user.address = "Brahmanbaria";
console.log(user);

user.address = {
    city:"Brahmanbaria",
    area: "Nabinagar"
};

console.log(user);

console.log(user.keys); // undefined

console.log(Object.keys(user)); // to get al the keys as list
console.log(Object.values(user)); // to get all the values as list
console.log(Object.entries(user)); // each key-value on a list, 