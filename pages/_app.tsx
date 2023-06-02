import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import apolloClient from '../utils/apolloClient';
import { globalStyles } from '../shared/styles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={apolloClient}>
      {globalStyles}
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;

