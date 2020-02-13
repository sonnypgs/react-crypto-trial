import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { getMainDefinition } from 'apollo-utilities';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';

const GRAPHQL_HTTP_ENDPOINT_URL = 'http://gambilife.com/graphql';
const GRAPHQL_WS_ENDPOINT_URL = 'ws://gambilife.com/graphql';

export const makeApolloClient = async () => {

  const cache = new InMemoryCache();
  await persistCache({
    cache,
    storage: window.localStorage,
  });

  const httpLink = new HttpLink({
    uri: GRAPHQL_HTTP_ENDPOINT_URL,
    // credentials: 'include',
    // headers: {
    // },
  });

  const wsLink = new WebSocketLink({
    uri: GRAPHQL_WS_ENDPOINT_URL,
    options: {
      reconnect: true,
      // timeout: 0,
      lazy: true, // important! so auth cookie will be included after login
      connectionParams: {
        // credentials: 'include',
        // headers: {
        // },
      },
    },
  });

  const link = split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
  );

  const client = new ApolloClient({
    cache,
    link,
    connectToDevTools: true,
    // resolvers: {
    // },
  });

  return client;
}