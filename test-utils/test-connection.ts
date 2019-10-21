import dotenv from "dotenv";
import { createConnection } from "typeorm";

export const testConnection = (drop: boolean = false) => {
  dotenv.config();
  return createConnection({
    database: "typegraphql-formality-test",
    dropSchema: drop,
    entities: ["src/schemas/*.ts"],
    logging: true,
    ssl: true,
    synchronize: drop,
    type: "mongodb",
    url: process.env.TYPEORM_HOST,
    useUnifiedTopology: true
  });
};
