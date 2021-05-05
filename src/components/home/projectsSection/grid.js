import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { v4 as uuid } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import { projects } from "./index";

const useStyles = makeStyles((theme) => ({
  resalted: {
    color: theme.palette.warning.main,
  },
}));

export default function GridSection() {
  const classes = useStyles();
  return (
    <Grid
      container
      // spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      alignContent="center"
    >
      <Grid item md={12}>
        <Typography
          gutterBottom={true}
          variant="h2"
          component="h2"
          align="justify"
          className={classes.resalted}
        >
          SAMPLE OF MY WORK
        </Typography>
      </Grid>
      <Grid container item justify="center" md={12} spacing={2}>
        {projects.map((item) => (
          <Grid key={uuid()} item md={4}>
            <Card raised={true}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={item.title}
                  height="200"
                  image={item.image}
                  title={item.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.resalted}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="secondary"
                  onClick={() => window.open(item.url, "_blank")}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
