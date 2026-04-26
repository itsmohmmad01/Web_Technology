// 6. Comparison Operators in JavaScript

// == (loose equality — type coercion happens)
console.log("== (loose equality)");
console.log(5 == "5");     // true  (string coerced to number)
console.log(0 == false);   // true
console.log(1 == true);    // true
console.log(null == undefined); // true

// === (strict equality — no coercion)
console.log("\n=== (strict equality)");
console.log(5 === "5");    // false (different types)
console.log(0 === false);  // false
console.log(5 === 5);      // true

// != and !==
console.log("\n!= and !==");
console.log(5 != "5");     // false (they ARE loosely equal)
console.log(5 !== "5");    // true  (strictly not equal)

// > < >= <=
let a = 10, b = 20;
console.log("\nRelational operators");
console.log("a > b :", a > b);   // false
console.log("a < b :", a < b);   // true
console.log("a >= 10:", a >= 10); // true
console.log("b <= 20:", b <= 20); // true

// String comparison (lexicographic)
console.log("\nString comparison");
console.log("apple" < "banana"); // true
console.log("Z" < "a");          // true (uppercase < lowercase in Unicode)
console.log("10" > "9");         // false! ("1" < "9" lexicographically)
console.log(10 > 9);             // true  (numeric)

// Best practice: always use === and !==
let userInput = "42";
let expected  = 42;
console.log("\nloose:", userInput == expected);  // true  (risky)
console.log("strict:", userInput === expected);  // false (safe & clear)
