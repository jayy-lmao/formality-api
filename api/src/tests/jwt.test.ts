import { hash } from "bcrypt";
import bcrypt from "bcrypt";
import {} from "jest";
import "mocha";
import "reflect-metadata";
import { getToken } from "../resolvers/getToken";
import UserInput from "../resolvers/inputs/UserInput";
import UserResolver from "../resolvers/UserResolver";
import { testConnection } from "../test-utils/test-connection";

const testPassword = "yeetus";
const email = "criken@criken.criken";

let conn;
let testUserId: string;

beforeAll(async () => {
  conn = await testConnection();
  const user = await UserResolver.createUser({ email, password: testPassword });
  testUserId = user.id;
});

describe("Tokens", () => {
  it("Get JWT token", async () => {
    const password = await hash(testPassword, 5);
    const user: UserInput = { email, password };
    const token = await getToken(user, testPassword);
    expect(token).toBeTruthy();
  });
  it("No user", async () => {
    const password = await hash(testPassword, 5);
    const errorMessage = { error: "Wrong username or password" };
    expect(getToken(undefined, password)).rejects.toEqual(errorMessage);
  });
  it("No token for wrong deets", async () => {
    const errorMessage = { error: "Wrong username or password" };
    const password = await hash(testPassword, 5);
    const user: UserInput = { email, password };
    expect(getToken(user, "not the correct password")).rejects.toEqual(
      errorMessage
    );
  });
  it("Hashing error", async () => {
    //  jest.fn((user, password) => {throw new Error("hashing error")});
    const bcryptError = "Mocked Bcrypt compare error";
    const mock = jest.spyOn(bcrypt, "compare");
    mock.mockImplementation((a, b, callback) => {
      const err = new Error(bcryptError);
      // tslint:disable-next-line: no-unused-expression
      callback && callback(err, true);
      return new Promise(() => true);
    });
    const password = await hash(testPassword, 5);
    const user: UserInput = { email, password };
    expect(getToken(user, testPassword)).rejects.toEqual(
      new Error(bcryptError)
    );
    mock.mockRestore();
  });
});
