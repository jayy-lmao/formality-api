"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { GraphQLServer } from "graphql-yoga";
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const express_jwt_1 = __importDefault(require("express-jwt"));
require("reflect-metadata");
const createSchema_1 = require("./createSchema");
const PORT = 4001;
const path = "/graphql";
const app = express_1.default();
const getUserFromReq = (reqWithUser) => {
    return reqWithUser.user;
};
(() => __awaiter(this, void 0, void 0, function* () {
    const schema = yield createSchema_1.createSchema();
    const server = new apollo_server_express_1.ApolloServer({
        context: ({ req }) => {
            const user = getUserFromReq(req);
            const context = {
                req,
                user
            };
            // console.log({context})
            return context;
        },
        schema
    });
    const options = {
        endpoint: "/graphql",
        playground: "/playground",
        port: PORT
    };
    // Mount a jwt or other authentication middleware that is run before the GraphQL execution
    app.use(path, express_jwt_1.default({
        credentialsRequired: false,
        secret: process.env.JWT_SECRET || "something_is_better_than_nothing"
    }));
    server.applyMiddleware({ app, path });
    app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
}))();
//# sourceMappingURL=index.js.map