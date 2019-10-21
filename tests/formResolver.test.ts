import {} from "jest";
import "mocha";
import "reflect-metadata";
import { Connection } from "typeorm";
import Form from "../src/schemas/Form";
import { gCall } from "../test-utils/gCall";
import { testConnection } from "../test-utils/test-connection";

let conn;
let testId: string;

const testForm = {
  description: "This is yes a form",
  title: "Why"
};

beforeAll(async () => {
  conn = await testConnection();
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
    id
    description
    title
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
    const response = await gCall({
      source: createForm,
      variableValues: {
        data: testForm
      }
    });
    expect(response).toBeTruthy();
  });
});
