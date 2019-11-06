import {} from "jest";
import "mocha";
import "reflect-metadata";
import UserResolver from "../resolvers/UserResolver";
import Form from "../schemas/Form";
import { gCall } from "../test-utils/gCall";
import { testConnection } from "../test-utils/test-connection";

let conn;
let testId: string;
let testUserId: string;

const testForm = {
  description: "This is yes a form",
  title: "Why"
};

const testFormMaker = {
  email: "testy@testy.testy",
  password: "hamsalad"
};
const login = `
query ($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

beforeAll(async () => {
  conn = await testConnection();
  const user = await UserResolver.createUser(testFormMaker);
  testUserId = user.id;
  const form = await Form.create(testForm).save();
  testId = form.id.toString();
});
afterAll(async () => {
  Form.delete({});
});

const createForm = `
mutation ($data: FormInput!){
  createForm(data: $data){
    description
    title
    author {
      email
    }
  }
}`;

const formById = `
query ($id: String!) {
    form(id: $id) {
      id
      description
      title
    }
  }
`;

describe("Forms", () => {
  it("Can find form by ID", async () => {
    const response = await gCall({
      source: formById,
      user: { ...testFormMaker, id: testUserId },
      variableValues: { id: testId }
    });
    expect(response).toMatchObject({
      data: {
        form: {
          ...testForm,
          id: testId
        }
      }
    });
  });

  it("Can create a form", async () => {
    const response = await gCall({
      source: createForm,
      user: { ...testFormMaker, id: testUserId },
      variableValues: {
        data: testForm
      }
    });
    expect(response.data).toBeTruthy();
  });
});
