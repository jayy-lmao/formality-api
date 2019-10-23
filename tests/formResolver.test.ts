import {} from "jest";
import "mocha";
import "reflect-metadata";
import { Connection } from "typeorm";
// import User from "../src/schemas/User";
import UserResolver from "../src/resolvers/UserResolver";
import Form from "../src/schemas/Form";
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
  // await User.create(testFormMaker).save();
  const user = await UserResolver.createUser(testFormMaker);
  testUserId = user.id;
  // const res = await gCall({
  //   source: login,
  //   variableValues: testFormMaker
  // })
  // token = res.data && res.data.login || '';
  const form = await Form.create(testForm).save();
  testId = form.id.toString();
});
afterAll(async () => {
  Form.delete({});
  // await conn.close();
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
    // console.log({token})
    const response = await gCall({
      source: createForm,
      user: { ...testFormMaker, id: testUserId },
      variableValues: {
        data: testForm
      }
    });
    // console.log({response})
    expect(response.data).toBeTruthy();
  });
});
