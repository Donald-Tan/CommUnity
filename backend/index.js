const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(express.static("public"));

let messages = [];

io.on("connection", (socket) => {
  console.log("Client connected");

  // Send existing messages to the new client
  socket.emit("messages", messages);

  // Handle new message from client
  socket.on("newMessage", (message) => {
    messages.push(message);
    io.emit("newMessage", message);
  });

  // Handle client disconnection
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
