import React from "react";
import { v4 as uuid } from "uuid";
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
  GridList,
  GridListTile,
  GridListTileBar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "80vh",
    paddingTop: "40px",
    paddingBottom: "8px",
    [theme.breakpoints.up("md")]: {
      paddingTop: "40px",
      paddingBottom: "40px",
    },
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
  containerMobile: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    paddingTop: "5vh",
    paddingBottom: "5vh",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export default function ProjectsSection() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.sectionDesktop}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justify="center"
          >
            <Grid container item xs={12} spacing={4}>
              {[...new Array(4)].map(() => (
                <Grid key={uuid()} item md={3}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image="https://picsum.photos/300/200"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Lizard
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.sectionMobile}>
        <Container maxWidth="lg" className={classes.containerMobile}>
          <GridList cellHeight={400} className={classes.gridList} cols={1.5}>
            {[...new Array(4)].map((value, index) => (
              <GridListTile key={uuid()}>
                <img src="https://picsum.photos/400/300" alt="title" />
                <GridListTileBar
                  title="title"
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                  /* actionIcon={
                <IconButton aria-label={`star ${index}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              } */
                />
              </GridListTile>
            ))}
          </GridList>
        </Container>
      </div>
    </>
  );
}
