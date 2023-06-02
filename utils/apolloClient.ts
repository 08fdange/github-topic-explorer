import { ApolloClient, InMemoryCache } from '@apollo/client';

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

if (!GITHUB_TOKEN) {
    throw new Error("Missing environment variable: NEXT_PUBLIC_GITHUB_TOKEN");
}

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});

export default client;

