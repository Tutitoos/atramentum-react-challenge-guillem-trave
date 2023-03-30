import "@/styles/globals.css";
import globals from "@/styles/globals/globals";
import GlobalStyles from "@/styles/globals/GlobalStyles";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={globals}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
