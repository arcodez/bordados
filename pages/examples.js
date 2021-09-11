import { Bordados } from "../components/Examples/Bordados";
import { Estampados } from "../components/Examples/Estampados";
import { Serigrafia } from "../components/Examples/Serigrafia";
import { Sublimacion } from "../components/Examples/Sublimacion";
import { Layout } from "../components/Layout";
import Head from "next/head";

export default function Examples() {
  return (
    <Layout>
      <Head>
        <title>Ejemplos</title>
      </Head>

      <Estampados />
      <Bordados />
      <Sublimacion />
      <Serigrafia />
    </Layout>
  );
}
