import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  useScrollTrigger,
  Paper,
  Button,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import Drawer from "./drower";
import DialogContact from "./dialogContact";

export const items = [
  {
    id: 0,
    href: "/",
    header: "Home",
    icon: <HomeIcon color="primary" />,
  },
  {
    id: 1,
    href: "/about",
    duration: 1000,
    header: "About",
    description: "A short description about me and my line of work",
    icon: <InfoIcon color="primary" />,
  },
  {
    id: 2,
    href: "/projects-github",
    duration: 1300,
    header: "Projects",
    description: "A sample of the projects I have worked on",
    icon: <BusinessCenterIcon color="primary" />,
  },
  /*  {
    id: 3,
    href: "#",
    duration: 1600,
    header: "Skills",
    description: "Skills I possess as a member and developer in projects",
    icon: <ListIcon color="primary" />,
  }, */
  /* {
    id: 4,
    href: "/#contact",
    duration: 1900,
    header: "Contact",
    description: "Send any question or a working proposal",
    icon: <ContactMailIcon color="primary" />,
  }, */
];

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: theme.palette.background.paper,
    minHeight: "93.5vh",
    [theme.breakpoints.up("md")]: {
      minHeight: "90vh",
    },
  },
  toolbar: {
    backgroundColor: theme.palette.primary.main,
  },
  menuLink: {
    marginRight: theme.spacing(2),
    // backgroundColor: theme.palette.primary.main,
    // border: `2px solid ${theme.palette.primary.dark}`,

    color: theme.palette.secondary,
    borderRadius: "20px",
    padding: "2px 8px 2px 8px",
    fontSize: "18px",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  paperChildrens: {
    minHeight: "90vh",
    margin: "0",
  },
}));

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Layout(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <CssBaseline />

      <HideOnScroll {...props}>
        <div className={classes.grow}>
          <AppBar>
            <Toolbar className={classes.toolbar}>
              <div className={classes.grow}>
                <div className={classes.sectionDesktop}>
                  <Image src="/logo.png" width="50" height="50" />
                  {items.map((menu) => (
                    <Link href={menu.href} key={menu.id}>
                      <Button color="secondary" size="large">
                        {menu.header}
                      </Button>
                    </Link>
                  ))}
                </div>
                <div className={classes.sectionMobile}>
                  <Drawer />
                </div>
              </div>
              <IconButton
                color="inherit"
                onClick={() => props.setDarkMode(!props.darkMode)}
              >
                {theme.palette.type === "light" ? (
                  <Brightness4Icon />
                ) : (
                  <BrightnessHighIcon />
                )}
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() =>
                  window.open(
                    "https://github.com/acm-97?tab=projects",
                    "_blank"
                  )
                }
              >
                <GitHubIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Toolbar />
        </div>
      </HideOnScroll>
      <div className={classes.container}>
        {props.children}
        <DialogContact />
      </div>
    </>
  );
}
