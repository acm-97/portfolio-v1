import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    paddingTop: "40px",
    paddingBottom: "8px",
  },
  card: {
    display: "flex",
    width: "100%",
    minHeight: "35vh",
    backgroundColor: theme.palette.primary.light,
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
}));

export default function ProjectsPage() {
  const [state, setState] = React.useState([]);
  const classes = useStyles();

  const getProjects = async () => {
    const response = await axios.get(
      "https://api.github.com/users/acm-97/projects",
      {
        headers: {
          Accept: "application/vnd.github.inertia-preview+json",
        },
      }
    );

    setState(response.data);
    //return response;
    // console.log(response);
  };

  React.useEffect(async () => {
    if (!state.length) {
      const response = await axios.get(
        "https://api.github.com/users/acm-97/projects",
        {
          headers: {
            Accept: "application/vnd.github.inertia-preview+json",
          },
        }
      );

      setState(response.data);
      console.log(state);
    }
  }, [state.length]);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid
        container
        // spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        {/*  <Grid item md={12}>
          <Typography
            gutterBottom={true}
            variant="h2"
            component="h2"
            align="justify"
            className={classes.resalted}
          >
            SAMPLE OF MY WORK
          </Typography>
        </Grid> */}
        <Grid container item xs={12} spacing={4}>
          {state.map((item) => (
            <Grid key={state.id} item md={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={item.name}
                    height="100"
                    image="/github-sample.png"
                    title={item.name}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.resalted}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => window.open(item.html_url, "_blank")}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
