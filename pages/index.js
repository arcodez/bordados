import Head from "next/head";
import { Layout } from "../components/Layout";
import { Header } from "../components/Index/Header";
import { Services } from "../components/Index/Services";
import { Carousel } from "../components/Index/Carousel";
import { Cards } from "../components/Index/Cards";
import { Information } from "../components/Index/Information";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Bordados || Margarita</title>
      </Head>
      <Header />
      <Services />
      <Carousel />
      <Cards />
      <Information />
    </Layout>
  );
}
