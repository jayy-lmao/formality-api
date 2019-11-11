import { createConnection } from "typeorm";

export const configDB = async () => {
    if (process.env.TYPEORM_USERNAME) {
        await createConnection({
            database: process.env.TYPEORM_DATABASE,
            entities: [ "src/schemas/*.ts" ],
            host: process.env.TYPEORM_HOST,
            logging: true,
            password: process.env.TYPEORM_PASSWORD,
            port: 27017,
            ssl: false,
            synchronize: true,
            type: "mongodb",
            username: process.env.TYPEORM_USERNAME,
        });
    } else {
        await createConnection({
            database: "typegraphql-formality",
            entities: [ "src/schemas/*.ts" ],
            logging: true,
            ssl: true,
            synchronize: true,
            type: "mongodb",
            url: process.env.TYPEORM_HOST,
            useUnifiedTopology: true,
        });
    }
};
