import React from "react";
import { styled, makeStyles } from "@material-ui/core/styles";
import Description from "./description";
import { Container, Grid, Paper } from "@material-ui/core";
import Skills from "./skills";
import SocialLinks from "../socialLinks";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "5vh",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  // TODO withStyles removal
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: "60",
  lineHeight: "60px",
  marginTop: "2vh"
}));

export default function AboutPage() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item md={7}>
          <Description />
          <Item elevation={6} >
            <SocialLinks />
          </Item>
        </Grid>
        <Grid item md={5}>
          <Skills />
        </Grid>
       
      </Grid>
      
    </Container>
  );
  }