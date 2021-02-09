import React from 'react';
import Head from 'next/head';

import Navbar from '../src/components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Josprima Sihombing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </>
  );
}
