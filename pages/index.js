import React from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import PortfolioSite from "../src/components/index";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>PORTFOLIO | HOME</title>
      </Head>
      <CssBaseline />
      <PortfolioSite />
    </>
  );
};

export default Portfolio;
