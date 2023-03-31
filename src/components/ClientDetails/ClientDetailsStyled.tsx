import styled from "styled-components";

const ClientDetailsStyled = styled.div`
  background-color: ${(props) => props.theme.colors.light};
  border-radius: 10px;
  padding: 20px 40px;
  overflow: hidden;
  width: 100%;
  min-width: 500px;
  max-width: 500px;
  height: 500px;

  .card-head {
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
    padding-bottom: 20px;

    .card-head__title {
      color: ${(props) => props.theme.colors.textColor.blue};
      font-size: 24px;
      font-weight: 600;
      text-align: center;
    }
  }

  .card-body {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(9, auto);
    grid-column-gap: 100px;
    grid-row-gap: 6px;

    div {
      margin-bottom: 10px;

      h3 {
        color: ${(props) => props.theme.colors.textColor.default};
        font-size: 18px;
        font-weight: 500;
        margin: 0 0 5px;
      }

      span,
      p {
        color: ${(props) => props.theme.colors.textColor.default};
        font-size: 16px;
      }

      &:nth-child(4) {
        display: flex;
        flex-direction: column;
      }

      &:first-child {
        grid-column: 1 / span 2;
        display: flex;
        flex-direction: row;
        gap: 12px;
      }

      &:last-child {
        grid-column: 1 / span 2;
      }
    }
  }
`;

export default ClientDetailsStyled;
