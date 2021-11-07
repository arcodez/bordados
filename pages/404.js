import React from "react";
import { Layout } from "../components/Layout";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="not-found">
        <h1>Error</h1>

        <img src="https://www.pagenotfound.ca/img/404_test_1a.gif" />

        <h1>Page not found</h1>

        <style jsx>{`
          img {
            width: 40%;
          }

          .not-found {
            text-align: center;
            padding: 20px;
            font-size: 1em;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default PageNotFound;
