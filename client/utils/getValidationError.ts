import { GraphQLError } from "graphql";
export const getValidationError = (
  errorResponse: Error & {
    graphQLErrors?: GraphQLError[];
  }
) => {
  const error = {};
  const firstGraphQLError =
    errorResponse &&
    errorResponse.graphQLErrors &&
    errorResponse.graphQLErrors[0];
  const { validationErrors } =
    firstGraphQLError &&
    firstGraphQLError.extensions &&
    firstGraphQLError.extensions.exception;
  if (validationErrors) {
    validationErrors.forEach(validationError => {
      console.log(validationError);
      error[validationError.property] = Object.values(validationError)[0];
    });
    return error;
  }
};
