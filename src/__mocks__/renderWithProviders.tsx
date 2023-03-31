import { RenderOptions, render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { InitialEntry } from "@remix-run/router";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import globals from "@/styles/globals/globals";
import GlobalStyles from "@/styles/globals/GlobalStyles";

interface ExtendedPropsWithChildren extends PropsWithChildren {
  initialEntries?: InitialEntry[];
}

interface ExtendedRenderOptions extends RenderOptions {
  initialEntries?: InitialEntry[];
}

const ExtendedRouter = ({ children, initialEntries = [] }: ExtendedPropsWithChildren): JSX.Element =>
  initialEntries.length > 0 ? (
    <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
  ) : (
    <BrowserRouter>{children}</BrowserRouter>
  );

const renderWithProviders = (ui: React.ReactElement, { initialEntries, ...renderOptions }: ExtendedRenderOptions = {}) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => (
    <ExtendedRouter initialEntries={initialEntries}>
      <ThemeProvider theme={globals}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ExtendedRouter>
  );

  return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;
