let user = {
    name: "Ashik", 
    age : 25,
    address: {
    city:"Brahmanbaria",
    area: "Nabinagar",
    zipcode: 1213,
},
};

console.log(user);

console.log(user.address.zipcode);
console.log(user['address']['zipcode']);

let entry = Object.entries(user);

console.log(entry[0][1]);

let students = [
    {
        name: "ashik",
        id: 101,
    },
    {
        name: "Asif",
        id: 102,
    },
];

console.log(students[1].id)