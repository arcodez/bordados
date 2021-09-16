import { Fragment } from "react";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="/shirt.png" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/glider-js@1.7.7/glider.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pushbar.js@1.0.0/src/pushbar.min.css"
        ></link>
      </Head>

      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/glider-js@1.7.7/glider.min.js"></Script>
      {/* <Script src="https://cdn.jsdelivr.net/npm/pushbar.js@1.0.0/src/pushbar.min.js"></Script> */}
    </Fragment>
  );
}

export default MyApp;
