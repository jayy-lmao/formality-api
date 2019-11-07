import { buildSchema } from "type-graphql";
import resolvers from "./resolvers";

export async function createSchema() {
  return await buildSchema({
    authChecker: ({ context: { req } }) => {
      return !!req.session.userId;
    },
    emitSchemaFile: false,
    resolvers
  });
}
