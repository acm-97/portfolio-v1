import Head from "next/head";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "../styles/globals.css";
import Layout from "../src/components/common/layout";

const theme = createMuiTheme({
  // light: will be calculated from palette.primary.main,
  // dark: will be calculated from palette.primary.main,
  // contrastText: will be calculated to contrast with palette.primary.main
  palette: {
    primary: {
      // light: "#42abb0",
      main: "#014fc5",
      // dark: "#023b8c",
    },
    secondary: {
      light: "#fafafa",
      main: "#f7f7f7",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <ScopedCssBaseline>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ScopedCssBaseline>
    </>
  );
}

export default MyApp;
