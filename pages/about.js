import React from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import AboutPage from "../src/components/about";

const About = () => {
  return (
    <>
      <Head>
        <title>PORTFOLIO | ABOUT</title>
      </Head>
      <CssBaseline />
      <AboutPage />
    </>
  );
};

export default About;
