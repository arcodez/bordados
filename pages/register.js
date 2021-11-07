import React from "react";
import { Layout } from "../components/Layout";
import { Register } from "../components/Session/Register";
import Head from "next/head";

const register = () => {
  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <Register />
    </Layout>
  );
};

export default register;
