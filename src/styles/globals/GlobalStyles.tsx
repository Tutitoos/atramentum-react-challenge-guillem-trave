import GlobalResets from "./GlobalResets";
import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = css`
  body {
    font-family: ${(props) => props.theme.fonts.mainFont.font};
    background-color: ${(props) => props.theme.colors.backgoundColor.gray};
  }
`;

export default createGlobalStyle`
  ${GlobalResets}
  ${GlobalStyles}
`;
