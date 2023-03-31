import Layout from "@/components/Layout/Layout";
import { wrapper } from "@/redux/store";
import "@/styles/globals/global.css";
import globals from "@/styles/globals/globals";
import GlobalStyles from "@/styles/globals/GlobalStyles";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <ThemeProvider theme={globals}>
        <GlobalStyles />
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
