import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Page404 = () => {
  return (
    <>
      <Head>
        <title>404 - Pages Not Found</title>
        <meta name="description" content="Muhammed Semih Irmak - Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png"></link>
      </Head>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
            <h2>Page not found</h2>
          </div>
          <Link href="/">Homepage</Link>
        </div>
      </div>
    </>
  );
};

export default Page404;
