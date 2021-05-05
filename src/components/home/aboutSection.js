import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import Link from "next/link";
import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import SocialLinks from "../socialLinks";

const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.secondary.main,
    backgroundColor: "transparent",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.8)",
    minHeight: "100vh",
  },
  imageDescription: {
    borderRadius: "50vh",
    height: "30vh",
    marginBottom: "5vh",
  },
  description: {
    textAlign: "justify",
  },
  section: {
    backgroundImage: `url("/about.jpg")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    position: "relative",
    minHeight: "100vh",
  },
  sectionDesktop: {
    // minHeight: "100vh",
    
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    // minHeight: "100vh",
    display: "initial",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  resalted: {
    color: theme.palette.warning.main,
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  // TODO withStyles removal
  ...theme.typography.body2,
  textAlign: "justify",
  lineHeight: "60px",
  padding: "4vh",
  color: theme.palette.secondary.main,
  backgroundColor: "transparent",
}));

export default function AboutSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.overlay}>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid container item md={7}>
            <Item>
              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item md={12}>
                  <img
                    src="/perfil.jpg"
                    alt="male-dev"
                    className={classes.imageDescription}
                  />
                </Grid>

                <div className={classes.sectionDesktop}>
                  <Grid item md={10}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="h2"
                      align="justify"
                      className={classes.resalted}
                    >
                      Hey there,
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      align="justify"
                    >
                      My name is{" "}
                      <span className={classes.resalted}>
                        Alejandro Cabrera Mena
                      </span>
                      , I am an enthusiast of we programming, willing to learn
                      new technologies and skills. In the last years I have done
                      some personal projects and some as freelancer. My main
                      works are done with the{" "}
                      <span className={classes.resalted}> MERN stack</span> as
                      well as with the{" "}
                      <span className={classes.resalted}>MEAN stack</span> . I
                      am always looking for projects where I can test my
                      knowledge and skills and of course where I can improve
                      myself as a professional...
                    </Typography>
                    <Link href="/about">
                      <Button
                        size="large"
                        variant="contained"
                        color={"primary"}
                      >
                        Read More
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item md={1} />
                  <Grid item md={1}>
                    <SocialLinks />
                  </Grid>
                </div>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
