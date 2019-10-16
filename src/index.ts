import { GraphQLServer } from 'graphql-yoga';
import "reflect-metadata";
import { buildSchema } from 'type-graphql';
import resolvers from './resolvers';

const PORT = 4001;


(async () => {
    const schema = await buildSchema({
        resolvers,
        emitSchemaFile: false,
    });
    const server = new GraphQLServer({
        schema,
    });

    const options = {
        port: PORT,
        endpoint: '/graphql',
        playground: '/playground',
    }
    server.start(options, () => console.log(`Server running on ${PORT}`));
})()