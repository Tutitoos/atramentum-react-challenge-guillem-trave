import styled from "styled-components";

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  main {
    max-width: 1920px;
    min-width: 1200px;
    margin: 30px 50px;

    & > section {
      width: 100%;
      margin: 0 auto;
    }
  }
`;

export default LayoutStyled;
