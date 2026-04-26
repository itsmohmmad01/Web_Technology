// 7. Comparison of null and undefined

// --- Loose equality (==) ---
console.log("null == undefined  :", null == undefined);   // true  (special rule)
console.log("null == null       :", null == null);        // true
console.log("undefined == undefined:", undefined == undefined); // true

// null is NOT loosely equal to anything except null and undefined
console.log("null == 0  :", null == 0);   // false
console.log("null == '' :", null == "");  // false
console.log("null == false:", null == false); // false

// --- Strict equality (===) ---
console.log("\nnull === undefined :", null === undefined); // false (different types)
console.log("typeof null       :", typeof null);           // "object" (JS quirk!)
console.log("typeof undefined  :", typeof undefined);      // "undefined"

// --- Relational comparisons (null → 0, undefined → NaN) ---
console.log("\nRelational comparisons:");
console.log("null > 0  :", null > 0);   // false
console.log("null < 0  :", null < 0);   // false
console.log("null == 0 :", null == 0);  // false
console.log("null >= 0 :", null >= 0);  // true  (null converts to 0)
console.log("null <= 0 :", null <= 0);  // true

console.log("\nundefined > 0  :", undefined > 0);   // false (NaN comparisons)
console.log("undefined < 0  :", undefined < 0);   // false
console.log("undefined == 0 :", undefined == 0);  // false
console.log("undefined >= 0 :", undefined >= 0);  // false

// --- Safe null / undefined checks ---
let value = null;
if (value == null) {
  // catches BOTH null and undefined (intentional loose check here)
  console.log("\nvalue is null or undefined");
}

if (value === null) {
  console.log("value is strictly null");
}

// Optional chaining for safe access
let obj = null;
console.log("Safe access with ?. :", obj?.name); // undefined (no error)
