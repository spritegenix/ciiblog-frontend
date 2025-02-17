// ./ApolloClient
import { HttpLink } from "@apollo/client";
import { registerApolloClient, ApolloClient, InMemoryCache, } from "@apollo/experimental-nextjs-app-support";


export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_BASE_GQL_URL,
    }),
  });
});