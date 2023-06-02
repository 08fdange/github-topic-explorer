import React from 'react';
import Head from 'next/head';
import { TopicExplorer } from '../components';

const Home = () => (
  <>
    <Head>
      <title>Github Topic Explorer</title>
    </Head>
    <TopicExplorer />
  </>
);

export default Home;
