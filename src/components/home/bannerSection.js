import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0",
    padding: "0",
    width: "100%",
    height: "60vh",
    position: "relative",
    zIndex: "2",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: "4",
  },
  container: {
    position: "relative",
    top: "15vh",
    zIndex: "5",
    color: "white",
  },
  image: {
    height: "60vh",
    width: "100%",
    position: "absolute",
    zIndex: "1",
  },
}));

export default function BannerSection() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <img src="/fondo-dev.jpg" alt="" className={classes.image} />

        <div className={classes.overlay}>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container>
              <Grid item md={6}>
                <Typography variant="h3">Alejandro Cabrera Mena</Typography>
                <Typography gutterBottom variant="h5">
                  Full Stack Web Developper
                </Typography>
                <Button size="large" variant="contained" color="primary">
                  Contact me
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
}
