import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const port = 3000;
const httpServer = createServer(app);
const io = new Server(httpServer);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

io.on("connection", (socket) => {
    // get the user inside the room
    console.log("a user connected");
});

httpServer.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

io.on("disconnect", (socket) => {
    // remove the user from the room
    console.log("user disconnected");
})
