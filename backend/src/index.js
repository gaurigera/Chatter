const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

const app = express();
const port = 3000;
const io = new Server(app);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

io.on("connection", (socket) => {
    console.log("a user connected");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
