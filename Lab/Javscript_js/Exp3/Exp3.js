//Activity

//1)Difference between arrow function and simple function
// Simple Function
function add(a, b) {
    return a + b;
}
console.log("Sum: " + add(2, 3));

// Arrow Function
const multiply = (a, b) => a * b;
console.log("Product: " + multiply(2, 3));
console.log();

// Arrow functions do not have their own 'this' context, while simple functions do.
// Arrow functions cannot be used as constructors, whereas simple functions can.
// Arrow functions have a more concise syntax.

//2)write a code for arrow function with 2 examples
const square = (x) => x * x;
console.log("Square: " + square(4));

const Name = (name) => `Hello, ${name}`;
console.log(Name("Nuh"));
console.log();

//3)write code for switch case
const marks = 75;
let result;
switch (true) {
    case (marks >= 90):
        result = "A+";
        break;
    case (marks >= 80):
        result = "A";   
        break;
    case (marks >= 70):
        result = "B";   
        break;
    case (marks >= 60):
        result = "C";   
        break;
    case (marks >= 50):
        result = "D";   
        break;
    default:
        result = "Fail";
}   
console.log("Grade: " + result);
console.log();

//4)how to use truthy and falsy values in javascript with simple example
const value = 9; // Falsy value
if (value) {
    console.log("This is a truthy value.");
}
else {
    console.log("This is a falsy value.");
}
console.log();
// Falsy values in JavaScript: false, 0, "", null, undefined, NaN
// Truthy values are all values that are not falsy. Examples include: true, non-zero numbers, non-empty strings, objects, arrays, etc.


//5)how to use ternary operater
const age = 20;
const Vote = (age >= 18) ? "Eligible to vote." : "Not eligible to vote.";
console.log(Vote);
console.log();
// Ternary operator syntax: condition ? expression_if_true : expression_if_false
// It is a shorthand for if-else statements.
// It is often used for simple conditional assignments or return statements.

//6)how to use loops in array in js
const a = [1, 2, 3, 4, 5];
// Using for loop
let sum = 0;
for (let i = 0; i < a.length; i++) {
    sum += a[i];
}
console.log("Sum of array elements: " + sum);
console.log();

//7)differnce between for of and for in
const arr = ['a', 'b', 'c'];
// for...in loop
for (let index in arr) {
    console.log("Index: " + index);
}

// for...of loop
for (let value of arr) {
    console.log("Value: " + value);
}
console.log();

//8)how to use map function and filter function in js in simple example
const numbers = [8];
// Using map function to square each element
const sq = numbers.map(num => num * num);
console.log("Square: " + sq);

// Using filter function to get even numbers
const even = numbers.filter(num => num % 2 === 0);
console.log("Even: " + even);
console.log();
// Map function creates a new array with the results of calling a provided function on every element in the calling array.
// Filter function creates a new array with all elements that pass the test implemented by the provided function.

//9)how to use reduce function in js with 
//Syntax For Reduce function
// array.reduce((accumulator, currentValue) => {
//   return updatedAccumulator
// }, initialValue)

const x = [1, 2, 3, 4];

const s = x.reduce((total, num) => {
  return total + num;
}, 0);

console.log(s); 



