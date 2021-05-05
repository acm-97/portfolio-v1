import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Typography,
  Zoom,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundImage: `url("/presentation.jpg")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    minHeight: "93.5vh",
    [theme.breakpoints.up("md")]: {
      minHeight: "90vh",
    },
  },
  overlay: {
    minHeight: "93.5vh",
    [theme.breakpoints.up("md")]: {
      minHeight: "90vh",
    },
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    position: "relative",
    top: "5vh",
    color: theme.palette.secondary.light,
    textAlign: "center",
    fontSize: "25px",
    [theme.breakpoints.up("sm")]: {
      top: "10vh",
      fontSize: "35px",
    },
  },
  resalted: {
    color: theme.palette.warning.main,
  },
}));

export default function BannerSection() {
  const classes = useStyles();
  const [load, setLoad] = React.useState(false);

  React.useEffect(() => {
    setLoad((prev) => !prev);
  }, []);

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        {/* <img src="/fondo-dev.jpg" alt="" className={classes.image} /> */}

        <div className={classes.overlay}>
          <Container maxWidth="lg" className={classes.container}>
            <Grid
              container
              direction="column"
              alignContent="center"
              justify="center"
            >
              <Grid item md={12}>
                <Image src="/logo.png" width="200" height="200" />
                <Zoom
                  in={load}
                  style={{ transitionDelay: load ? "500ms" : "0ms" }}
                >
                  <Typography variant="h2" component="h2" gutterBottom>
                    <span className={classes.resalted}>Welcome</span>, dear
                    visitor
                  </Typography>
                </Zoom>
                <Zoom
                  in={load}
                  style={{ transitionDelay: load ? "1500ms" : "0ms" }}
                >
                  <Typography variant="h4" component="h2" gutterBottom>
                    I'm{" "}
                    <span className={classes.resalted}>
                      {" "}
                      Alejandro Cabrera Mena
                    </span>
                  </Typography>
                </Zoom>
                <Zoom
                  in={load}
                  style={{ transitionDelay: load ? "2500ms" : "0ms" }}
                >
                  <Typography variant="h6" component="h2">
                    and I'm a{" "}
                    <span className={classes.resalted}>
                      Full Stack Web Developper
                    </span>
                  </Typography>
                </Zoom>
                <Link href={"/#projects"}>
                  <a>
                    <ExpandMoreIcon style={{ fontSize: "20vh" }} />
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
}
