import { css } from "styled-components";

const GlobalResets = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  ul,
  ol,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }
`;

export default GlobalResets;
