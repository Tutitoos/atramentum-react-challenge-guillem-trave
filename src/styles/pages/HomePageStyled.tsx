import styled from "styled-components";

const HomePageStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    align-items: start;
    gap: 20px;
  }
`;

export default HomePageStyled;
