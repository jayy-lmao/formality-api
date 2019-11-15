import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import withApollo from 'next-with-apollo';
// import { endpoint } from '../config';

const endpoint = '/graphql';
const cache = new InMemoryCache();


// const createClient = ({ headers }: { headers?: any }) => {
//   return new ApolloClient({
//     request: operation => {
//       operation.setContext({
//         fetchOptions: {
//           credentials: 'include',
//         },
//         headers,
//       });
//     },
//     uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
//     cache
//   });
// }

const createClient = ({ headers }: { headers?: any }) => {
  return new ApolloClient({
    request: (operation) => {
      const token = localStorage.getItem('ACCESS_TOKEN');
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      })
    },
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    cache
  })
}

export default withApollo(createClient, { getDataFromTree: 'ssr' });
