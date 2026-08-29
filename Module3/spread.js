// let newArr = [...oldArr]

// let newObj = {...oldObj}

let cart = ["fruits", "rice"];

// cart.push("egg");

console.log(cart)

cart2 = [...cart, "egg"]

console.log(cart2)

const personalInfo = {
    name: "Samad",
    age: 22,
};

const contactInfo = {
    email:"ashik@ashik.com",
    phone : "01734332321",
};

const fullProfile = {
    ...personalInfo,
    ...contactInfo,
    zip: "6000",
};

console.log(fullProfile);