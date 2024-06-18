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

httpServer.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

httpServer.on("listening", () => {
    import("./socket/connection.js");
})

export { io };