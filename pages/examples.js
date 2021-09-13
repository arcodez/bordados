import { Bordados } from "../components/Examples/Bordados";
import { Layout } from "../components/Layout";
import Head from "next/head";

export default function Examples() {
  return (
    <Layout>
      <Head>
        <title>Ejemplos</title>
      </Head>

      <Bordados />
    </Layout>
  );
}
