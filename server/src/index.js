import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import socketHandler from "./socket/index.js";

const app = express();
const port = 4000;
const httpServer = createServer(app);
const io = new Server(httpServer);

socketHandler(io);

const server = new ApolloServer({
    typeDefs: `
        type A {
            id: ID!
        }
        type Query {
            getA: [A]
        }
    `,
    resolvers: {},
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
// Ensure we wait for our server to start
await server.start();

app.use("/", cors(), express.json(), expressMiddleware(server));

// Modified server startup
await new Promise((resolve) => httpServer.listen({ port: port }, resolve));

console.log(`🚀 Server ready at http://localhost:${port}/`);