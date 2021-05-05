import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import GridListSection from "./gridList";
import GridSection from "./grid";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    paddingTop: "40px",
    paddingBottom: "8px",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "initial",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  containerMobile: {
    minHeight: "100vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    paddingTop: "5vh",
    paddingBottom: "5vh",
    backgroundColor: theme.palette.background.paper,
  },
  resalted: {
    color: theme.palette.warning.main,
  },
}));

export const projects = [
  {
    image: "/portfolio-sample.png",
    title: "Portfolio",
    description:
      "Portfolio where I show a description about me and some of my work as web developper",
    url: "https://github.com/acm-97/my-portfolio",
  },
];

export default function ProjectsSection() {
  const classes = useStyles();

  return (
    <>
      {/*  <div className={classes.sectionDesktop} id="projects"> */}
      <Container maxWidth="lg" className={classes.container}>
        <GridSection />
      </Container>
      {/*  </div>
      <div className={classes.sectionMobile}>
        <Container maxWidth="lg" className={classes.containerMobile}>
          <Typography
            variant="h2"
            component="h2"
            className={classes.resalted}
            align="justify"
          >
            SAMPLE OF MY WORK
          </Typography>
          <GridListSection />
        </Container>
      </div> */}
    </>
  );
}
