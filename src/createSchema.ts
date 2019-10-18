import { buildSchema } from "type-graphql";
import resolvers from "./resolvers";

export async function createSchema() {
  return await buildSchema({
    emitSchemaFile: false,
    resolvers
  });
}
