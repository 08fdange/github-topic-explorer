import { ApolloProvider } from '@apollo/client';
import apolloClient from '../utils/apolloClient';
import { globalStyles } from '../shared/styles';

const App = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={apolloClient}>
      {globalStyles}
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
