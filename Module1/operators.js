// Arithmetic Operators + - * / %
// Assignment Operators = += -= *= /=
// Comparison Operators <=, >=, ==, != , === (also check the type)
// Logical Operators && || !

const a = 10;
const b = 3;

const sum = a + b;
console.log(sum);

const division = a/b;
console.log(division.toFixed(2)); // toFixed convert into string, with two decimal points

const reminder = a % b;
console.log(reminder);

// a + b - (c + f) * d / e

// sum = sum + 10; sum += 10;

const c = a > b && 10; // if true, then show 10
console.log(c)