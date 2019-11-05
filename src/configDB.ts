import { createConnection } from "typeorm";

export const configDB = async () => {
  await createConnection({
    database: "typegraphql-formality",
    entities: ["src/schemas/*.ts"],
    logging: true,
    ssl: true,
    synchronize: true,
    type: "mongodb",
    url: process.env.TYPEORM_HOST,
    useUnifiedTopology: true
  });
};
