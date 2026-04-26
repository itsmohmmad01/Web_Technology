// Promises — Why Better Than Callbacks + 4 Examples

// ════════════════════════════════════════════════
// WHY PROMISES ARE BETTER THAN CALLBACKS
// ════════════════════════════════════════════════

// ── CALLBACK HELL (the problem) ──────────────────
function getUser_cb(id, callback) {
  setTimeout(() => callback(null, { id, name: "Alice" }), 500);
}
function getOrders_cb(userId, callback) {
  setTimeout(() => callback(null, [{ id: 101 }, { id: 102 }]), 500);
}
function getOrderDetails_cb(orderId, callback) {
  setTimeout(() => callback(null, { id: orderId, item: "Laptop" }), 500);
}

// Callback hell — deeply nested, hard to read/maintain
getUser_cb(1, (err, user) => {
  if (err) return console.error(err);
  getOrders_cb(user.id, (err, orders) => {
    if (err) return console.error(err);
    getOrderDetails_cb(orders[0].id, (err, detail) => {
      if (err) return console.error(err);
      console.log("Callback Hell result:", detail.item); // Laptop
    });
  });
});

// ── PROMISES (the solution) ───────────────────────
const delay = ms => new Promise(res => setTimeout(res, ms));

function getUser(id)           { return delay(500).then(() => ({ id, name: "Alice" })); }
function getOrders(userId)     { return delay(500).then(() => [{ id: 101 }, { id: 102 }]); }
function getOrderDetails(oid)  { return delay(500).then(() => ({ id: oid, item: "Laptop" })); }

// Flat chaining — no nesting, easy to read
getUser(1)
  .then(user    => getOrders(user.id))
  .then(orders  => getOrderDetails(orders[0].id))
  .then(detail  => console.log("Promise chain result:", detail.item))
  .catch(err    => console.error("Error:", err));

/*
  ADVANTAGES OF PROMISES OVER CALLBACKS:
  1. No callback hell (flat .then() chains)
  2. Single unified .catch() for all errors
  3. Composable with Promise.all / Promise.race
  4. Works naturally with async/await
  5. Guaranteed asynchronous — callbacks can fire synchronously (Zalgo)
*/


// ════════════════════════════════════════════════
// 4 PROMISE EXAMPLES
// ════════════════════════════════════════════════

async function examples() {

  // ── Example 1: Basic resolve & reject ───────────
  console.log("\n--- Example 1: Basic resolve/reject ---");
  const p1 = new Promise((resolve, reject) => {
    const success = true;
    if (success) resolve("🎉 Operation succeeded!");
    else         reject(new Error("💥 Operation failed!"));
  });
  p1.then(msg => console.log(msg)).catch(err => console.error(err.message));


  // ── Example 2: Promise.all (run in parallel) ────
  console.log("\n--- Example 2: Promise.all ---");
  const [a, b, c] = await Promise.all([
    delay(300).then(() => "Result A"),
    delay(200).then(() => "Result B"),
    delay(400).then(() => "Result C"),
  ]);
  console.log("All resolved:", a, b, c);


  // ── Example 3: Promise.race (first to finish wins) ──
  console.log("\n--- Example 3: Promise.race ---");
  const winner = await Promise.race([
    delay(500).then(() => "Slow server"),
    delay(100).then(() => "Fast server"),
    delay(300).then(() => "Medium server"),
  ]);
  console.log("Race winner:", winner); // Fast server


  // ── Example 4: Promise.allSettled (handle mixed results) ──
  console.log("\n--- Example 4: Promise.allSettled ---");
  const results = await Promise.allSettled([
    Promise.resolve("✅ Fetch users succeeded"),
    Promise.reject(new Error("❌ Fetch orders failed")),
    Promise.resolve("✅ Fetch products succeeded"),
  ]);
  results.forEach(r => {
    if (r.status === "fulfilled") console.log("  fulfilled:", r.value);
    else                          console.log("  rejected :", r.reason.message);
  });
}

examples();
