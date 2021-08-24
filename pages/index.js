import Head from "next/head";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Services } from "../components/Services";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Bordados || Margarita</title>
      </Head>
      <Header />
      <Services />
    </Layout>
  );
}
