import "mocha";
import "reflect-metadata";
import { gCall } from "../test-utils/gCall";

const questionById = `
query {
    question(id: 1) {
      id
      formId
      text
    }
  }
`;

describe("Questions", () => {
  it("Get question by ID", async () => {
    const response = await gCall({
      source: questionById
      // variableValues: { id: 1},
    });
    expect(response).toMatchObject({
      data: {
        question: {
          formId: 1,
          id: "1",
          text: "What is the speed of an unladen swallow"
        }
      }
    });
  });
});
