import UserResolver from "../resolvers/UserResolver";
import { gCall } from "../test-utils/gCall";
import { testConnection } from "../test-utils/test-connection";

const testPassword = "criken!";
const email = "tomato@tomato.tomato";

const protectedQuery = `
query {
  protected
}`;

let conn;
let testUserId: string;

beforeAll(async () => {
  conn = await testConnection();
  const user = await UserResolver.createUser({ email, password: testPassword });
  testUserId = user.id;
});

describe("Authorization", () => {
  it("Unauthorized", async () => {
    const response = await gCall({
      source: protectedQuery
    });
    expect(response.errors && response.errors[0].message).toEqual(
      "Access denied! You need to be authorized to perform this action!"
    );
  });
  it("Authorized", async () => {
    const response = await gCall({
      source: protectedQuery,
      user: { email, password: testPassword, id: testUserId }
    });
    expect(response.data && response.data.protected).toEqual("alive");
  });
});
