import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
      <link rel="icon" type="image/png" href="/img/favicon/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/img/favicon/favicon.svg" />
      <link rel="shortcut icon" href="/img/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="Paradise Nursery" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <body id='body'>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
