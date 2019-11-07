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
        // context: getUserFromContext(),
        context: ({ req, res }: any) => ({ req, res }),
        schema,
    });
    // Mount jwt authentication middleware that is run before the GraphQL execution
    const port = 4000;
    const app = getMiddleWare(path);
    server.applyMiddleware({ app, cors: { credentials: true, origin: true }, path });
    app.listen({ port }, () => console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`));
})();
