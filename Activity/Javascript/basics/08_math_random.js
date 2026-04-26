// 8. Math.random() — Why We Use It & How It Works

// --- What it returns ---
// Math.random() returns a floating-point number in [0, 1)
// i.e., 0 is possible but 1 is never returned
console.log("Random float [0,1):", Math.random());
console.log("Random float [0,1):", Math.random());

// --- Random integer between 0 and N-1 ---
function randomInt(n) {
  return Math.floor(Math.random() * n);
}
console.log("\nRandom int [0,5):", randomInt(5));

// --- Random integer between min and max (inclusive) ---
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random int [1,10]:", randomBetween(1, 10));
console.log("Random int [50,100]:", randomBetween(50, 100));

// --- Why do we use Math.random()? ---
// 1. Games — random dice, shuffling cards
// 2. Testing — generate random test data
// 3. Simulations — Monte Carlo methods
// 4. UI — random colours, random quotes, random backgrounds
// 5. OTPs / tokens (not cryptographically secure though!)

// --- Random colour example ---
function randomColor() {
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}
console.log("\nRandom colour:", randomColor());

// --- Random element from array ---
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
const fruits = ["apple", "banana", "cherry", "mango", "orange"];
console.log("Random fruit:", randomChoice(fruits));

// --- Shuffle array (Fisher-Yates) ---
function shuffle(arr) {
  let a = [...arr]; // copy
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
console.log("\nShuffled fruits:", shuffle(fruits));

// --- Note: NOT cryptographically secure ---
// For passwords / tokens use: crypto.getRandomValues()
const array = new Uint32Array(1);
crypto.getRandomValues(array);
console.log("\nCrypto-secure random:", array[0]);
