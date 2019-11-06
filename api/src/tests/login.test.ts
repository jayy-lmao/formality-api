import UserResolver from "../resolvers/UserResolver";
import { gCall } from "../test-utils/gCall";
import { testConnection } from "../test-utils/test-connection";

const testPassword = "wowzer!";
const email = "inspector@gadget.hoohoo";

const loginQuery = `
query ($email: String!, $password: String!) 
{
  login(email: $email, password: $password)
}
`;

let conn;
let testUserId: string;

beforeAll(async () => {
  conn = await testConnection();
  const user = await UserResolver.createUser({ email, password: testPassword });
  testUserId = user.id;
});

describe("Login", () => {
  it("Correct Login", async () => {
    const response = await gCall({
      source: loginQuery,
      variableValues: {
        email,
        password: testPassword
      }
    });
    expect(response.data && response.data.login).toBeTruthy();
  });
  it("Incorrect Login", async () => {
    const response = await gCall({
      source: loginQuery,
      variableValues: {
        email,
        password: "Wrong"
      }
    });
    expect(response.errors && response.errors[0].message).toEqual(
      'Unexpected error value: { error: "Wrong username or password" }'
    );
  });
});
