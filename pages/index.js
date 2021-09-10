import Head from "next/head";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Services } from "../components/Services";
import { Carousel } from "../components/Carousel";
import { Cards } from "../components/Cards";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Bordados || Margarita</title>
      </Head>
      {/* <div className="container"> */}
      <Header />
      <Services />  
      <Carousel />
      <Cards />
    </Layout>
  );
}
