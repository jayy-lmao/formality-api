import {} from "jest";
import "mocha";
import "reflect-metadata";
import { Connection } from "typeorm";
import { gCall } from "../test-utils/gCall";
import { testConnection } from "../test-utils/test-connection";

let conn: Connection;
beforeAll(async () => {
  conn = await testConnection();
});
afterAll(async () => {
  await conn.close();
});

const questionById = `
query {
    question(id: "5daaca0bdf20691272b91850") {
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
          formId: "5daac850b5edec11246c0d62",
          id: "5daaca0bdf20691272b91850",
          text: "What is the difference between a duck?"
        }
      }
    });
  });
});
