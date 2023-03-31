import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: ${(props) => props.theme.colors.light};
  box-shadow: 0px 4px 4px 0px #0000000d;
  height: 70px;
  min-width: 100%;
  padding: 20px 30px;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .header {
    &__title {
      max-width: 1920px;
      min-width: 1920px;
      margin: 0 auto;
      font-weight: 500;
      font-size: 22px;
      color: ${(props) => props.theme.colors.textColor.blue};
    }
  }
`;

export default HeaderStyled;
