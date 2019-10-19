// import { GraphQLServer } from "graphql-yoga";
import { ApolloServer, gql } from "apollo-server-express";
import dotenv from "dotenv";
import express from "express";
import jwt from "express-jwt";
import "reflect-metadata";
import { createSchema } from "./createSchema";

import { Request } from "express";
import { createConnection } from "typeorm";
export interface IGetUserAuthInfoRequest extends Request {
  user?: string; // or any other type
}

dotenv.config();
const PORT = 4001;
const path = "/graphql";
const app = express();
const DB_HOST = process.env.TYPEORM_HOST;

const getUserFromReq = (reqWithUser: IGetUserAuthInfoRequest) => {
  return reqWithUser.user;
};

(async () => {
  await createConnection({
    database: "typegraphql-formality",
    entities: ["src/schemas/*.ts"],
    logging: true,
    ssl: true,
    synchronize: true,
    type: "mongodb",
    url: process.env.TYPEORM_HOST,
    useUnifiedTopology: true
  });
  const schema = await createSchema();
  const server = new ApolloServer({
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
  app.use(
    path,
    jwt({
      credentialsRequired: false,
      secret: process.env.JWT_SECRET || "something_is_better_than_nothing"
    })
  );
  server.applyMiddleware({ app, path });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
})();
