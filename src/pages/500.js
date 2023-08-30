import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Page500 = () => {
  return (
    <>
      <Head>
        <title>500 - Internal Server Error</title>
        <meta name="description" content="Muhammed Semih Irmak - Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png"></link>
      </Head>
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>500</h1>
            <h2>Internal Server Error</h2>
          </div>
          <Link style={{ marginTop: '30px' }} href="/">
            Homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page500;
