import {} from "jest";
import "mocha";
import "reflect-metadata";
import { createSchema } from "../createSchema";

describe("Tokens", () => {
  it("Get JWT token", async () => {
    expect(createSchema()).toBeTruthy();
  });
});
