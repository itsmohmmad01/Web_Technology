// 4. IMP Note: JavaScript Automatically Converts String to Number
//    in Arithmetic Operations (except +)

// --- Subtraction: string → number ---
console.log("10" - 5);   // 5   (JS converts "10" to 10)
console.log("20" - "8"); // 12

// --- Multiplication ---
console.log("6" * "7");  // 42

// --- Division ---
console.log("100" / "4"); // 25

// --- Modulus ---
console.log("17" % "5"); // 2

// --- Exponentiation ---
console.log("3" ** "3"); // 27

// --- WHY NOT + ? ---
// + is also the string concatenation operator
// so JS prefers string mode when one operand is a string
console.log("10" + 5);   // "105"  NOT 15 !!!

// To force numeric addition when you have strings, convert first:
console.log(Number("10") + 5); // 15
console.log(+"10" + 5);        // 15

// --- Edge cases ---
console.log("" - 0);      // 0   (empty string → 0)
console.log(null - 0);    // 0   (null → 0)
console.log(true - 0);    // 1   (true → 1)
console.log(false - 0);   // 0   (false → 0)
console.log("abc" - 0);   // NaN (non-numeric string → NaN)
