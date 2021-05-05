import React from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BannerSection from "./home/bannerSection";
import ProjectsSection from "./home/projectsSection/index";
import AboutSection from "./home/aboutSection";
import ContactSection from "./home/contactSection";

const useStyles = makeStyles({});

export default function PortfolioSite() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <BannerSection />
      <ProjectsSection />
      <AboutSection />
      {/* <ContactSection /> */}
    </>
  );
}
