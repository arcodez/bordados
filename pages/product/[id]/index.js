import React from "react";
import { Layout } from "../../../components/Layout";
import SingleProduct from "../../../components/Products/SingleProduct";
import Head from "next/head";

const index = () => {
  return (
    <Layout>
      <Head>
        <title>Single Product</title>
      </Head>
      <SingleProduct />
    </Layout>
  );
};

export default index;
