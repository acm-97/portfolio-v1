import React from "react";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import { v4 as uuid } from "uuid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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

export default function GridListSection() {
  const classes = useStyles();
  return (
    <GridList cellHeight={450} className={classes.gridList} cols={1.5}>
      {[...new Array(4)].map((value, index) => (
        <GridListTile key={uuid()}>
          <img src="https://picsum.photos/500/300" alt="title" />
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
  );
}
