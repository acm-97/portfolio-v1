import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  SwipeableDrawer,
  List,
  IconButton,
  ListItemAvatar,
  Grid,
  Divider,
} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { items } from "./layout";
import SocialLinks from "../socialLinks";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    position: "relative",
    minHeight: "100vh",
  },
}));

export default function Drawer() {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, left: open });
  };

  const DrawerContainer = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Grid container direction="column" alignContent="center" justify="center">
        <Grid item md={12}>
          <Image src="/logo.png" width="200" height="200" />
        </Grid>
        <Divider />
        <Grid item md={12}>
          <List>
            {items.map((menu, index) => (
              <Link href={menu.href}>
                <ListItem button key={menu.id}>
                  <ListItemAvatar>
                    <Avatar>{menu.icon}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={menu.header} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Grid>
      </Grid>
      <div style={{ position: "absolute", bottom: 0 }}>
        <Divider />
        <SocialLinks />
      </div>
    </div>
  );

  return (
    <div>
      <>
        <IconButton
          edge="start"
          className={classes.menuButton}
          onClick={toggleDrawer(true)}
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <DrawerContainer />
        </SwipeableDrawer>
      </>
    </div>
  );
}
