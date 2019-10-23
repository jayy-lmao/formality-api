import { graphql, GraphQLSchema } from "graphql";
import Maybe from "graphql/tsutils/Maybe";

import { createSchema } from "../src/createSchema";
import UserInput from "../src/resolvers/inputs/UserInput";

interface IOptions {
  source: string;
  variableValues?: Maybe<{
    [key: string]: any;
  }>;
  user?: UserInput;
}

let schema: GraphQLSchema;

export const gCall = async ({ source, variableValues, user }: IOptions) => {
  if (!schema) {
    schema = await createSchema();
  }

  return graphql({
    contextValue: {
      res: {
        clearCookie: jest.fn()
      },
      user
    },
    schema,
    source,
    variableValues
  });
};
