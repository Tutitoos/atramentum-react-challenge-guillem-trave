import { wrapper } from "@/redux/store";
import "@/styles/globals/global.css";
import globals from "@/styles/globals/globals";
import GlobalStyles from "@/styles/globals/GlobalStyles";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

const DynamicLayout = dynamic(() => import("@/components/Layout/Layout"), {
  ssr: false,
});

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <ThemeProvider theme={globals}>
        <GlobalStyles />
        <DynamicLayout>
          <Component {...props.pageProps} />
        </DynamicLayout>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
