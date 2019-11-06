import { buildSchema } from "type-graphql";
import resolvers from "./resolvers";

export async function createSchema() {
  return await buildSchema({
    authChecker: ({ context: { user } }) => {
      // console.log({user})
      if (user) {
        return true;
      }
      return false;
    },
    emitSchemaFile: false,
    resolvers
  });
}
