import React from "react";
import { Layout } from "../components/Layout";
import PaymentPage from "../components/Payments/PaymentPage";
import Head from "next/head";

const PayPage = () => {
  return (
    <Layout>
      <Head>
        <title>Payment Page</title>
      </Head>
      <PaymentPage />
    </Layout>
  );
};

export default PayPage;
