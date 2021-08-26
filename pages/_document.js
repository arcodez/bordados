import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
          <Main />
          <Script src="https://cdn.jsdelivr.net/npm/glider-js@1.7.7/glider.min.js"></Script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
