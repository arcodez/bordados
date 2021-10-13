import { Fragment } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Navbar2 } from "./Navbar/Navbar2";

export const Layout = ({ children }) => (
  <Fragment>
    <Navbar2 />
    {children}
    <Footer />
  </Fragment>
);
