import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { createSchema } from "./createSchema";

const PORT = 4001;

(async () => {
  const schema = await createSchema();
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
