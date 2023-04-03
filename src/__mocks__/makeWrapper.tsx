import { makeStore } from "@/redux/store";
import globals from "@/styles/globals/globals";
import GlobalStyles from "@/styles/globals/GlobalStyles";
import type { ClientState } from "@/types/clientTypes";
import type { UiState } from "@/types/uiTypes";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

interface MockWrapper {
  [x: string]: UiState | ClientState;
}

const mockWrapper = (mockState?: MockWrapper) => {
  const makeWrapper = ({ children }: PropsWithChildren) => {
    return (
      <Provider store={makeStore(mockState)}>
        <ThemeProvider theme={globals}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </Provider>
    );
  };

  return makeWrapper;
};

export default mockWrapper;
