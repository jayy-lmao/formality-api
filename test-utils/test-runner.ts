import * as jest from "jest";
import { testConnection } from "./test-connection";

let conn;

// globalSetup
async function init() {
  console.log("Initialization");
  conn = await testConnection();
}

// globalTeardown
async function afterTests() {
  console.log("End of tests - Execute something");
  conn.close();
}

init()
  .then(jest.run)
  .then(afterTests)
  .catch(e => console.error(e));
