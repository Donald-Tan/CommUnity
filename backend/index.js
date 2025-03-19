const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(express.static("public"));

let messages = [];

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("newMessage", (message) => {
    console.log("New message received:", message);
    io.emit("newMessage", message); // Broadcast to all clients
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Server listening on *:3000");
});
