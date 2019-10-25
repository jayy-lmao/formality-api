// import { GraphQLServer } from "graphql-yoga";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import "reflect-metadata";
import { createSchema } from "./createSchema";

import { configDB } from "./configDB";
import { getMiddleWare } from "./getMiddleWare";
import { getUserFromContext } from "./userFromContext";

dotenv.config();
const PORT = 4001;
const path = "/graphql";

(async () => {
  await configDB();
  const schema = await createSchema();
  const server = new ApolloServer({
    context: getUserFromContext(),
    schema
  });

  // Mount jwt authentication middleware that is run before the GraphQL execution
  const app = getMiddleWare(path);
  server.applyMiddleware({ app, path });
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
})();



