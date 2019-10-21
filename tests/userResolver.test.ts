import {} from "jest";
import "mocha";
import "reflect-metadata";
import { Connection } from "typeorm";
import User from "../src/schemas/User";
import { gCall } from "../test-utils/gCall";
import { testConnection } from "../test-utils/test-connection";

let testId: string;
let conn: Connection;
const testEmail = "tweedledee@tweedle.dee";
const testEmail2 = "tweedledum@tweedle.dum";

beforeAll(async () => {
  conn = await testConnection();
  const user = await User.create({
    email: testEmail,
    password: "tweedledee"
  }).save();
  testId = user.id.toString();
});
afterAll(async () => {
  User.delete({});
  // await conn.close();
});

const createUser = `
mutation ($email: String!){
  createUser(data:{
    email: $email
    password: Hunter2
  }){
    email
    id
  }
}`;

const userById = `
query ($id: String!) {
    user(id: $id) {
      id
      email
    }
  }
`;

describe("Users", () => {
  it("Can find user by ID", async () => {
    // jest.setTimeout(100000);
    const response = await gCall({
      source: userById,
      variableValues: { id: testId }
    });
    expect(response).toMatchObject({
      data: {
        user: {
          email: testEmail,
          id: testId
        }
      }
    });
  });

  it("Can create a user", async () => {
    // jest.setTimeout(100000);
    const response = await gCall({
      source: createUser,
      variableValues: {
        email: testEmail2
      }
    });
    expect(response).toBeTruthy();
  });
});
