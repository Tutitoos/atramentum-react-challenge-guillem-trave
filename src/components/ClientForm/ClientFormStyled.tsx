import styled from "styled-components";

const ClientFormStyled = styled.form`
  .form {
    &-fields {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-row-gap: 6px;
    }

    &-actions {
      display: flex;
      justify-content: center;

      &__button {
        border: none;
        background-color: ${(props) => props.theme.colors.textColor.blue};
        color: ${(props) => props.theme.colors.light};
        height: 48px;
        width: 110px;
        border-radius: 10px;
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
`;

export default ClientFormStyled;
