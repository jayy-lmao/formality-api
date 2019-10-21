import { hash } from "bcrypt";
import {} from "jest";
import "mocha";
import "reflect-metadata";
import { getToken } from "../src/resolvers/getToken";
import UserInput from "../src/resolvers/inputs/UserInput";

const testPassword = "yeetus";
const email = "criken@criken.criken";

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
});
