import React from "react";
import { Layout } from "../components/Layout";
import Head from "next/head";
import { Login } from "../components/Session/Login";

const login = () => {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <Login />
    </Layout>
  );
};

export default login;
