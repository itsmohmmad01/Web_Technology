// Real-Life Examples — Synchronous vs Asynchronous

// ════════════════════════════════════════════════
// SYNCHRONOUS REAL-LIFE EXAMPLES
// ════════════════════════════════════════════════
// Like a restaurant where one chef handles one order at a time.
// No one else is served until that order is complete.

function computeFactorial(n) {
  // CPU-bound task — pure calculation, synchronous
  if (n <= 1) return 1;
  return n * computeFactorial(n - 1);
}

console.log("=== Synchronous (Real-Life) ===");

// 1. Calculating a student's grade
function calculateGrade(marks) {
  const avg = marks.reduce((a, b) => a + b, 0) / marks.length;
  if (avg >= 90) return "A";
  if (avg >= 75) return "B";
  if (avg >= 60) return "C";
  return "F";
}
console.log("Grade:", calculateGrade([85, 92, 78, 90])); // B

// 2. Parsing a config file (sync — must know config before continuing)
const config = { host: "localhost", port: 3000, debug: true };
console.log("Server starting on", config.host + ":" + config.port);

// 3. Sorting a list of products by price
const products = [
  { name: "Shoe", price: 50 },
  { name: "Hat",  price: 20 },
  { name: "Bag",  price: 80 },
];
products.sort((a, b) => a.price - b.price);
console.log("Sorted:", products.map(p => `${p.name}($${p.price})`).join(", "));


// ════════════════════════════════════════════════
// ASYNCHRONOUS REAL-LIFE EXAMPLES
// ════════════════════════════════════════════════
// Like a restaurant where a waiter takes multiple orders,
// sends them to the kitchen, and serves each as it's ready.

const delay = ms => new Promise(res => setTimeout(res, ms));

async function realLifeAsync() {
  console.log("\n=== Asynchronous (Real-Life) ===");

  // 1. Fetching weather data from an API
  async function getWeather(city) {
    console.log(`Fetching weather for ${city}...`);
    await delay(800); // simulates network round-trip
    return { city, temp: "28°C", condition: "Sunny" };
  }
  const weather = await getWeather("Mumbai");
  console.log("Weather:", weather);

  // 2. Sending an email (fire-and-forget style)
  async function sendEmail(to, subject) {
    await delay(500);
    console.log(`Email sent to ${to}: "${subject}"`);
  }
  await sendEmail("user@example.com", "Order Confirmation");

  // 3. Uploading a profile picture
  async function uploadPhoto(filename) {
    console.log(`Uploading ${filename}...`);
    await delay(1200);
    return `https://cdn.example.com/photos/${filename}`;
  }
  const url = await uploadPhoto("avatar.jpg");
  console.log("Photo uploaded at:", url);

  // 4. Parallel API calls (loading a dashboard)
  console.log("\nLoading dashboard (parallel fetches)...");
  const [user, orders, notifications] = await Promise.all([
    delay(600).then(() => ({ name: "Alice", id: 1 })),
    delay(800).then(() => [{ id: 101 }, { id: 102 }]),
    delay(400).then(() => 3),
  ]);
  console.log("User:", user.name);
  console.log("Orders:", orders.length);
  console.log("Notifications:", notifications);

  // 5. Retry logic (async with error handling)
  let tries = 0;
  async function flakyAPI() {
    tries++;
    if (tries < 3) throw new Error("Server busy");
    return "Success!";
  }
  async function withRetry(fn, maxRetries = 5) {
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await fn();
      } catch {
        console.log(`  Retry ${i + 1}...`);
        await delay(200);
      }
    }
    throw new Error("All retries failed");
  }
  console.log("\nAPI with retry:", await withRetry(flakyAPI));
}

realLifeAsync();
