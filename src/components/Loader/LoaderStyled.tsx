import styled from "styled-components";

const LoaderStyled = styled.div`
  .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  .spinner-icon {
    width: 42px;
    height: 42px;
    box-sizing: border-box;
    border: solid 3px transparent;
    border-top-color: #29d;
    border-left-color: #29d;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default LoaderStyled;
