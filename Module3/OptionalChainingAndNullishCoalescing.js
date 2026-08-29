// Optional Chaining & Nullish Coalescing (?., ??, Safe Property Access
let user1 = {
  name: "Rahim",
  address: {
    city: "Dhaka",
  },
};

let user2 = {
  name: "Karim",
  // no address
};


// Optional Chaining
console.log(user1?.address?.city); //Dhaka
console.log(user2?.address?.city);  // Error

// nulish collescing ?? (for undefined or null found)

console.log(user2?.address?.city ?? "Rajshahi"); // if undefined found, then Rajshahi will used.

