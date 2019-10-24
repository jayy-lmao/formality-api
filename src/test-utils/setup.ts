// const testConnection =  require("./test-connection");
import { Connection } from "typeorm";
import { testConnection } from "./test-connection";

export default testConnection(true).then(() => process.exit());
