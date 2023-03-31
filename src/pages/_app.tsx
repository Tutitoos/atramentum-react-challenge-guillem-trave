import Layout from "@/components/Layout/Layout";
import "@/styles/globals/global.css";
import globals from "@/styles/globals/globals";
import GlobalStyles from "@/styles/globals/GlobalStyles";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={globals}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
