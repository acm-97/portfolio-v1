import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Backdrop,
  Button,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    paddingTop: "12vh",
    color: theme.palette.secondary.main,
    minHeight: "98vh",
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    backgroundColor: "rgba(0,0,0,0.8)",
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
    backgroundImage: `url("/freelancer.jpg")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    minHeight: "100vh",
  },
  sectionDesktop: {
    minHeight: "100vh",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    minHeight: "100vh",
    display: "initial",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
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
          <Grid container item md={8}>
            <Container maxWidth="lg" className={classes.container}>
              <Grid
                container
                spacing={0}
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
                  <Grid item md={12}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      className={classes.description}
                    >
                      Hello, my name is Alejandro Cabrera Mena, I am an
                      enthusiast of we programming, willing to learn new
                      technologies and skills. In the last years I have done
                      some personal projects and some as freelancer. My main
                      works are done with the MERN stack as well as with the
                      MEAN stack. I am always looking for projects where I can
                      test my knowledge and skills and of course where I can
                      improve myself as a professional...
                    </Typography>
                    <Button size="large" variant="contained" color={"primary"}>
                      Read More
                    </Button>
                  </Grid>
                </div>

                <div className={classes.sectionMobile}>
                  <Grid item md={12}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      className={classes.description}
                    >
                      Hello, my name is Alejandro Cabrera Mena, I am an
                      enthusiast of we programming, willing to learn new
                      technologies and skills. In the last years I have done
                      some personal projects and some as freelancer...
                    </Typography>
                    <Button size="large" variant="contained" color={"primary"}>
                      Read More
                    </Button>
                  </Grid>
                </div>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
