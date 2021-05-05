import React from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import ProjectsPage from "../src/components/projects";

const Projects = () => {
  return (
    <>
      <Head>
        <title>PORTFOLIO | PROJECTS</title>
      </Head>
      <CssBaseline />
      <ProjectsPage />
    </>
  );
};

export default Projects;
