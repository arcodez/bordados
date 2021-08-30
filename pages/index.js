import Head from "next/head";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Services } from "../components/Services";
import { Carousel } from "../components/Carousel";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Bordados || Margarita</title>
      </Head>
      {/* <div className="container"> */}
      <center>
        <Header />
        <Services />
        <Carousel />
      </center>
      {/* </div> */}

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </Layout>
  );
}
