import { Layout } from "../components/Layout";
import Head from "next/head";

export default function card() {
  return (
    <Layout>
      <Head>
        <title>Carrito</title>
      </Head>
      <div className="carito">
        <div className="products">
          <h2>Lista de Productos</h2>
          <hr />
          <div className="product"></div>
        </div>
        <h2>El carrito esta vacio</h2>
        <style jsx>{`
          .products {
            display: flex;
          }
        `}</style>
      </div>
    </Layout>
  );
}
