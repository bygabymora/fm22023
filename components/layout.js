import Head from 'next/head';
import React from 'react';

export default function RootLayout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title : 'Moraequipos SAS'}</title>
        <meta name="description" content="Moraequipos SAS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
    </>
  );
}
