const WebSocket = require("ws");

// ─── Create WebSocket Server on port 3000 ────────────────────────────────────
const wss = new WebSocket.Server({ port: 3000 });

console.log("✅ WebSocket server is running on ws://localhost:3000");
console.log("📂 Open client.html in your browser to start chatting!\n");

// Track how many clients are connected
let clientCount = 0;

// ─── When a client connects ───────────────────────────────────────────────────
wss.on("connection", function connection(ws) {
  clientCount++;
  const clientId = clientCount;

  console.log(`🟢 Client #${clientId} connected  |  Total online: ${wss.clients.size}`);

  // Send welcome message to the newly connected client
  ws.send(
    JSON.stringify({
      type: "system",
      text: `Welcome to WebSocket Chat! You are Client #${clientId}`,
    })
  );

  // Notify all OTHER clients that someone joined
  broadcast(
    JSON.stringify({
      type: "system",
      text: `Client #${clientId} has joined the chat.`,
    }),
    ws   // exclude the sender
  );

  // ─── Receive message from this client ──────────────────────────────────────
  ws.on("message", function incoming(message) {
    const text = message.toString();
    console.log(`📨 Client #${clientId} says: ${text}`);

    // Broadcast to ALL connected clients (including sender)
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(
          JSON.stringify({
            type: "chat",
            sender: `Client #${clientId}`,
            text: text,
          })
        );
      }
    });
  });

  // ─── When this client disconnects ──────────────────────────────────────────
  ws.on("close", () => {
    console.log(`🔴 Client #${clientId} disconnected  |  Total online: ${wss.clients.size}`);

    // Notify remaining clients
    broadcast(
      JSON.stringify({
        type: "system",
        text: `Client #${clientId} has left the chat.`,
      })
    );
  });

  // ─── Handle errors ─────────────────────────────────────────────────────────
  ws.on("error", (err) => {
    console.error(`❌ Error from Client #${clientId}:`, err.message);
  });
});

// ─── Helper: broadcast to all clients except the excluded one ─────────────────
function broadcast(message, exclude = null) {
  wss.clients.forEach(function each(client) {
    if (client !== exclude && client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}
