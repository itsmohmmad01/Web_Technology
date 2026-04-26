// 5. Increment & Decrement Operators

// --- Pre-increment (++x) ---
let a = 5;
console.log("Before pre-increment, a =", a); // 5
console.log("++a =", ++a);                   // 6 (increments THEN returns)
console.log("After pre-increment, a =", a);  // 6

// --- Post-increment (x++) ---
let b = 5;
console.log("\nBefore post-increment, b =", b); // 5
console.log("b++ =", b++);                      // 5 (returns THEN increments)
console.log("After post-increment, b =", b);    // 6

// --- Pre-decrement (--x) ---
let c = 10;
console.log("\n--c =", --c); // 9
console.log("c =", c);       // 9

// --- Post-decrement (x--) ---
let d = 10;
console.log("\nd-- =", d--); // 10
console.log("d =", d);       // 9

// --- Common use: loop counter ---
console.log("\nLoop with i++:");
for (let i = 0; i < 5; i++) {
  process.stdout.write(i + " ");
}
console.log();

// --- Practical difference demo ---
let x = 3;
let y = x++ * 2;
console.log("\nx++ * 2 => y =", y, ", x =", x); // y=6, x=4

let p = 3;
let q = ++p * 2;
console.log("++p * 2 => q =", q, ", p =", p); // q=8, p=4
