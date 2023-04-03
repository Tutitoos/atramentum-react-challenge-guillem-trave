import styled from "styled-components";

const NotFoundPageStyled = styled.section`
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 32px;
  }

  .link {
    margin-top: 25px;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: ${(props) => props.theme.colors.textColor.blue};
    color: ${(props) => props.theme.colors.light};
    height: 40px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
  }
`;

export default NotFoundPageStyled;
