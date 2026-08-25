
let techStack = ["JS", "TS", "node", "React"];

for (const tech of techStack){
    console.log("Learning: ",tech);
}

let obj = {
    name: "ashik",
    age: 27,
    address: "Dhaka",
};

for(let ele in obj)
{
    console.log(ele, "->", obj[ele]);
}