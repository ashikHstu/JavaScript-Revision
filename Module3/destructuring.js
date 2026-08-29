const student = {
    name: "Ashik",
    age : 28,
    address: "Dhaka"
};

//old
const OldName = student.name;

// new
const {age,address,name}=student;

console.log(name);

const student1 = {
    name: "Asif",
    age : 28,
    address: {
        city:"Dhaka",
        zip: 1212,
    },
};

const {name:stdName,
    address:{city,zip}} = student1;

console.log(`Name: ${stdName}`);


const arr = ["red","green","blue"]

const [,,third]=arr;

console.log(`Third value is: ${third}`);

const student2 = {
    name: "Asif",
    age : 28,
    address: {
        city:"Dhaka",
        zip: 1212,
    },
    hobbies: ['Gardening','Painting']
};

const {name:std2Name,
    address:{city:stdCity},
    hobbies:[firstHobby],
} = student2;

console.log(firstHobby,stdCity);