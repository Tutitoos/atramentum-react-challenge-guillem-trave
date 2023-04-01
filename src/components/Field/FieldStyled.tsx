import styled, { css } from "styled-components";

interface FieldStyledProps {
  fieldType: "TEXT" | "EMAIL" | "PASSWORD" | "TEL" | "CHECKBOX" | "TEXTAREA" | "NUMBER";
}

const FieldTextArea = css`
  width: 320px;
  min-width: 320px;
  max-width: 390px;
  min-height: 186px;
  max-height: 186px;
  padding-top: 15px;
  border-radius: 10px;
`;

const FieldText = css`
  height: 48px;
  width: 320px;
  border-radius: 10px;
`;

const FieldCheckbox = css`
  height: 24px;
  width: 24px;
  max-width: 24px;
  border-radius: 7px;
`;

const FieldStyled = styled.label<FieldStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  appearance: none;
  pointer-events: none;
  gap: 12px;

  .field {
    &__text {
      font-size: 18px;
      font-weight: 600;
      color: ${(props) => props.theme.colors.textColor.blue};
    }

    &__box {
      appearance: none;
      pointer-events: auto;
      outline: none;
      border: 1px solid ${(props) => props.theme.colors.textColor.blue};
      background-color: ${(props) => props.theme.colors.light};
      padding-left: 15px;
      font-size: 14px;
      ${(props) =>
        props.fieldType === "TEXTAREA"
          ? FieldTextArea
          : ["TEXT", "EMAIL", "PASSWORD", "TEL", "CHECKBOX", "NUMBER"].includes(props.fieldType) && FieldText};
      ${(props) => props.fieldType === "CHECKBOX" && FieldCheckbox};

      :focus {
        border-width: 2px;
        border-color: ${(props) => props.theme.colors.textColor.blue};
      }

      :checked {
        background-color: ${(props) => props.theme.colors.textColor.blue};
      }
    }
  }
`;

export default FieldStyled;
