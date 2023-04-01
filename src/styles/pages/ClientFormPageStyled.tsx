import styled from "styled-components";

const ClientFormPageStyled = styled.section`
  h2 {
    color: ${(props) => props.theme.colors.textColor.blue};
    font-weight: 500;
    font-size: 32px;
    text-align: center;
    margin-bottom: 60px;
  }
`;

export default ClientFormPageStyled;
