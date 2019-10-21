import { testConnection } from "./test-connection";
// const testConnection =  require("./test-connection");
import { Connection } from "typeorm";

export default testConnection(true).then(() => process.exit());
