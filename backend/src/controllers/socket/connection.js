import { io } from "../../index.js";

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("disconnect", () => {
        console.log("bye");
    })

    socket.on("chat msg", (msg, callback) => {
        console.log("You sent msg", msg);
        callback("hi")
    })
});