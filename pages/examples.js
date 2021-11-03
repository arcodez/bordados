import { Layout } from "../components/Layout";
import Head from "next/head";
import { ExampleGallery, ExampleSection } from "../components/Examples/ExampleSection";

export default function Examples() {
  return (
    <Layout>
      <Head>
        <title>Ejemplos</title>
      </Head>

      <ExampleGallery />
    </Layout>
  );
}
