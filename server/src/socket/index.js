import { sendMessage } from "./message/send";
import { typing } from "./message/typing";
import { createRoom } from "./room/create";
import { joinRoom } from "./room/join";
import { leaveRoom } from "./room/leave";

export default function (io) {
    io.on("connection", async (socket) => {
        console.log("A user connected");

        /**
         * Handle rooms for the users
        */
       socket.on("room:create", createRoom({ io, socket }));
       socket.on("room:join", joinRoom({ io, socket }));
       socket.on("room:leave", leaveRoom({ io, socket }));
       
       /**
        * Handle messages among the users
       */
      socket.on("message:typing", typing({ io, socket }));
      socket.on("message:send", sendMessage({ io, socket }));
      
      /**
       * Handle disconnection of the user
       */
      socket.on("disconnect", () => {
          console.log("bye");
          socket.disconnect(true);
      });
    });
}
