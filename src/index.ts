// import { GraphQLServer } from "graphql-yoga";
import { ApolloServer, gql } from "apollo-server-express";
import dotenv from "dotenv";
import express from "express";
import jwt from "express-jwt";
import "reflect-metadata";
import { createSchema } from "./createSchema";
import morgan from 'morgan';

import { createConnection } from "typeorm";
import { getUserFromReq } from "./userFromReq";

dotenv.config();
const PORT = 4001;
const path = "/graphql";
const app = express();

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
      // console.log(user)
      const context = {
        req,
        user
      };
      // console.log({context})
      return context;
    },
    schema
  });

  // Mount a jwt or other authentication middleware that is run before the GraphQL execution
  app.use(
    path,
    jwt({
      credentialsRequired: false,
      secret: process.env.JWT_SECRET || "something_is_better_than_nothing"
    })
  );
  app.use(
    morgan('dev')
  );
  server.applyMiddleware({ app, path });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
})();
