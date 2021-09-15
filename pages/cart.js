import { Layout } from "../components/Layout";
import Head from "next/head";
import { ShoppingCart } from "../components/Cart/ShoppingCart";

export default function card() {
  return (
    <Layout>
      <Head>
        <title>Carrito</title>
      </Head>
      <ShoppingCart />
    </Layout>
  );
}
