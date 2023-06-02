import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

const MyDocument: React.FC<{}> = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="An application for finding Github topics related to other Github topics using Github's GraphQL API" />
        <meta name="keywords" content="Github, Topic, Explorer, Related, Topics, GraphQL, API" />
        <meta name="author" content="Frank D'Angelo" />
        <meta charSet="UTF-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;