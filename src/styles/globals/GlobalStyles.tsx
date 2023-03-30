import GlobalResets from "./GlobalResets";
import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = css`
  body {
    font-family: ${(props) => props.theme.fonts.mainFont.font};
    background-color: ${(props) => props.theme.colors.dark};
  }

  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-track {
    background-color: #2e3643;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.orange};
    border-radius: 10px;
    border: 3px solid #2e3643;
  }
`;

export default createGlobalStyle`
  ${GlobalResets}
  ${GlobalStyles}
`;
