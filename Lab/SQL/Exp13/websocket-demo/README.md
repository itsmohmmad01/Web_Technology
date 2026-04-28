# Experiment 13 — Real-Time Communication using WebSocket in Node.js

---

## 📁 Project Structure

```
websocket-demo/
├── server.js       ← WebSocket server (Node.js)
├── client.html     ← Chat UI (open in browser)
├── package.json    ← Project dependencies
└── README.md       ← This file
```

---

## ✅ Prerequisites

| Software | Check Command |
|----------|---------------|
| Node.js  | `node -v`     |
| npm      | `npm -v`      |

---

## 🚀 How to Run

### Step 1 — Install Dependencies

Open terminal inside the `websocket-demo` folder:

```bash
npm install
```

### Step 2 — Start the Server

```bash
node server.js
```

You should see:
```
✅ WebSocket server is running on ws://localhost:3000
📂 Open client.html in your browser to start chatting!
```

### Step 3 — Open the Client

- Open `client.html` directly in your browser (just double-click it)
- Open **multiple tabs** of `client.html` to simulate multiple users
- Type a message and press **Enter** or click **Send**
- All tabs will receive the message instantly ✅

---

## 🔄 How It Works (Flow)

```
Browser Tab (client.html)
        |
        |  WebSocket connection (ws://localhost:3000)
        ▼
   server.js (Node.js)
        |
        |  Broadcasts message to ALL connected clients
        ▼
All Browser Tabs receive message in real time
```

1. Client connects → server logs "Client #1 connected"
2. Server sends a welcome message to the new client
3. Server notifies all others "Client #1 has joined"
4. Client sends a message → server broadcasts to everyone
5. Client disconnects → server notifies remaining clients

---

## 🌍 Real-World Use Cases

- WhatsApp / Chat apps
- Live stock market dashboards
- Online multiplayer gaming
- Instagram / Facebook notifications
- Live sports score updates
