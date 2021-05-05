import React from "react";
import Head from "next/head";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "../styles/globals.css";
import Layout from "../src/components/common/layout";

const LightTheme = createMuiTheme({
  // light: will be calculated from palette.primary.main,
  // dark: will be calculated from palette.primary.main,
  // contrastText: will be calculated to contrast with palette.primary.main
  palette: {
    type: "light",
    primary: {
      // light: "#42abb0",
      main: "#607d8b",
      // dark: "#023b8c",
    },
    secondary: {
      light: "#fafafa",
      main: "#f7f7f7",
    },
  },
});

const DarkTheme = createMuiTheme({
  // light: will be calculated from palette.primary.main,
  // dark: will be calculated from palette.primary.main,
  // contrastText: will be calculated to contrast with palette.primary.main
  palette: {
    type: "dark",
    primary: {
      // light: "#42abb0",
      main: "#263238",
      // dark: "#023b8c",
    },
    secondary: {
      light: "#fafafa",
      main: "#f7f7f7",
    },
  },
});

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <ScopedCssBaseline>
        <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
          <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ScopedCssBaseline>
    </>
  );
}

export default MyApp;
