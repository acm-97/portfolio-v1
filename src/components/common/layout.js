import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  useScrollTrigger,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
// import ListIcon from "@material-ui/icons/List";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import Drawer from "./drower";

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
    href: "#",
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
  {
    id: 4,
    href: "/#contact",
    duration: 1900,
    header: "Contact",
    description: "Send any question or a working proposal",
    icon: <ContactMailIcon color="primary" />,
  },
];

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: theme.palette.secondary.main,
  },
  menuLink: {
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
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
}));

const HideOnScroll = (props) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Layout(props) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <HideOnScroll {...props}>
        <div className={classes.grow}>
          <AppBar>
            <Toolbar>
              <div className={classes.grow}>
                <div className={classes.sectionDesktop}>
                  {items.map((menu) => (
                    <Link href={menu.href} key={menu.id}>
                      <a className={classes.menuLink}>{menu.header}</a>
                    </Link>
                  ))}
                </div>
                <div className={classes.sectionMobile}>
                  <Drawer />
                </div>
              </div>
              <IconButton
                color="inherit"
                onClick={() => window.open("https://github.com/", "_blank")}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/alejandro-cabrera-mena-2210381b8/",
                    "_blank"
                  )
                }
              >
                <LinkedInIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Toolbar />
        </div>
      </HideOnScroll>
      <div
        className={
          classes.container
        } /* style={{ backgroundColor: "#f7f7f7" }} */
      >
        {props.children}
      </div>
    </>
  );
}
