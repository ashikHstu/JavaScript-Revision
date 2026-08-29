

// function
function add(...numbers){
    // console.log(numbers);
    let total = 0;
    for (const num of numbers){
        total += num;
    }
    return total;
}

console.log(add(1,2,3,4,5,6,7,8));

const obj = {
    name: "Ashik",
    age: 27,
    address: "Dhaka",
    occupation: "Developer",
};

const {name, ...remaining } = obj;

console.log(remaining);


// array

const arr = [1,2,3,100,200];
const arr2 = [, , , ...rest] = arr;

console.log(rest);

function something(one, ...remaining)
{
    console.log(one, remaining);
}


something("first", 1,2,4);


