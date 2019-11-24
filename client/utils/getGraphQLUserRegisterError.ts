import { GraphQLError } from "graphql";
import { getValidationError } from "./getValidationError";
/* Break this into a signin error which then calls the validation error which can be used elsewhere*/
export const getGraphQLUserRegisterError = (
  errorResponse: Error & {
    graphQLErrors?: GraphQLError[];
  }
) => {
  console.log(errorResponse.graphQLErrors);
  if (errorResponse.message.includes("duplicate key error")) {
    return { form: "User Already Exists" };
  }
  return getValidationError(errorResponse);
};
