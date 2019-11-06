import { Connection } from "typeorm";
import { testConnection } from "./test-connection";

let conn: Connection;

export default (async () => {
  conn = await testConnection();
  await conn.close();
})();
