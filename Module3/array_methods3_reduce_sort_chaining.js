// reduce, sort, chaining
let products = [
  { title: "Mouse", price: 500, inStock: true },
  { title: "Keyboard", price: 1200, inStock: false },
  { title: "Monitor", price: 8000, inStock: true },
  { title: "Headphone", price: 1500, inStock: true },
];

let totalPrice = products.reduce((acc,current)=>{
    return (acc += current.price);
},0);

console.log(totalPrice);

// sort

// let sorted = [10,20,30,4,5,33].sort((a,b)=>a-b); // asc
// let sorted = [10,20,30,4,5,33].sort((a,b)=>b-a); // desc

let sorted = products.sort((a,b)=>a.price-b.price);

console.log(sorted);

// chaining

let estPrice = products
.filter((p)=> p.inStock == true)
.reduce((acc,cur)=>{
  return (acc+=cur.price);
},0);

console.log(estPrice)