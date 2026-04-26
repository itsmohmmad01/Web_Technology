// 2. Arithmetic Operators in JavaScript

let a = 20;
let b = 6;

console.log("Addition (+):", a + b);        // 26
console.log("Subtraction (-):", a - b);     // 14
console.log("Multiplication (*):", a * b);  // 120
console.log("Division (/):", a / b);        // 3.333...
console.log("Modulus (%):", a % b);         // 2 (remainder)
console.log("Exponentiation (**):", a ** b); // 64000000

// Floor division trick
console.log("Floor Division:", Math.floor(a / b)); // 3

// Order of precedence
let result = 5 + 3 * 2;
console.log("5 + 3 * 2 =", result); // 11 (not 16)

let result2 = (5 + 3) * 2;
console.log("(5 + 3) * 2 =", result2); // 16

// Assignment operators
let x = 10;
x += 5;  console.log("x += 5 :", x);  // 15
x -= 3;  console.log("x -= 3 :", x);  // 12
x *= 2;  console.log("x *= 2 :", x);  // 24
x /= 4;  console.log("x /= 4 :", x);  // 6
x %= 4;  console.log("x %= 4 :", x);  // 2
x **= 3; console.log("x **= 3:", x);  // 8
