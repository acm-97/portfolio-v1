import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Description from "./description";
import { Container, Grid } from "@material-ui/core";
import Skills from "./skills";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "5vh",
  },
}));

export default function AboutPage() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item md={7}>
          <Description />
        </Grid>
        <Grid item md={5}>
          <Skills />
        </Grid>
      </Grid>
    </Container>
  );
}
{
  /* <div className={classes.container}>
      <div style={{ width: "35%" }}>
        <Container maxWidth="lg">asdadssad</Container>
      </div>
      <div style={{ width: "65%" }}>
        <Container maxWidth="lg">
          <Description />
        </Container>
      </div>
    </div> */
}
