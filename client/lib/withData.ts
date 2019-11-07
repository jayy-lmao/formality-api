import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import withApollo from 'next-with-apollo';
// import { endpoint } from '../config';

const endpoint = '/api';
const cache = new InMemoryCache();


const createClient = ({ headers }: { headers?: any }) => {
  return new ApolloClient({
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    cache
  });
}

export default withApollo(createClient);