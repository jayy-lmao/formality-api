import {} from "jest";
import "mocha";
import "reflect-metadata";
import { Connection } from "typeorm";
import User from "../src/schemas/User";
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
query ($id: String!) {
    user(id: $id) {
      id
      email
    }
  }
`;

describe("Users", () => {
  it("Can find user by ID", async () => {
    const user = await User.create({
      email: "tweedledee@tweedle.dee",
      password: "tweedledee"
    }).save();
    const idString = user.id.toString();
    console.log("About to wait for response");
    const response = await gCall({
      source: questionById,
      variableValues: { id: idString }
    });
    console.log("Got response");
    expect(response).toMatchObject({
      data: {
        user: {
          email: user.email,
          id: idString
        }
      }
    });
  });
});
