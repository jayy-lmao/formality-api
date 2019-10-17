import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import resolvers from "./resolvers";

const PORT = 4001;

(async () => {
  const schema = await buildSchema({
    emitSchemaFile: false,
    resolvers
  });
  const server = new GraphQLServer({
    schema
  });

  const options = {
    endpoint: "/graphql",
    playground: "/playground",
    port: PORT
  };
  server.start(options, () => console.log(`Server running on ${PORT}`));
})();
