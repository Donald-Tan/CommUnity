const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

// Middleware
app.use(cors()); // Allows frontend to connect

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:19006", // Expo's default dev server
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg); // Send message to all clients
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Server listening on *:3000");
});
