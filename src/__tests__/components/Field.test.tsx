import Field, { FieldProps } from "@/components/Field/Field";
import renderWithProviders from "@/__mocks__/renderWithProviders";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given a Field component", () => {
  describe("When it is rendered a text input field", () => {
    test("Then it should show on the screen a input field", async () => {
      const mockOnChange = jest.fn();
      const expectedType = "TEXT";
      const expectedClassName = "text-class";
      const expectedName = "textField";
      const expectedPlaceholder = "Placeholder";
      const expectedAutoComplete = "on";
      const expectedValue = "Test value";
      const fieldProps: FieldProps = {
        field: {
          type: expectedType,
          onChange: mockOnChange,
          styles: {
            className: expectedClassName,
          },
        },
        label: "Text Field",
        name: expectedName,
        placeholder: expectedPlaceholder,
        required: true,
        autoComplete: expectedAutoComplete,
      };

      renderWithProviders(<Field {...fieldProps} />);

      const resultField = screen.queryByLabelText(fieldProps.name) as HTMLInputElement;
      await userEvent.type(resultField, expectedValue);

      expect(resultField).toBeInTheDocument();
      expect(resultField).toHaveAttribute("type", expectedType.toLowerCase());
      expect(resultField.className).toContain(expectedClassName);
      expect(resultField).toHaveAttribute("name", expectedName);
      expect(resultField).toHaveAttribute("placeholder", expectedPlaceholder);
      expect(resultField).toHaveAttribute("required");
      expect(resultField).toHaveAttribute("autocomplete", expectedAutoComplete);
      expect(mockOnChange).toHaveBeenCalled();
      expect(resultField.value).toStrictEqual(expectedValue);
    });

    test("Then it should show on the screen a input field with is missing a props required and autoComplete", async () => {
      const expectedType = "TEXT";
      const expectedName = "textField";
      const expectedAutoComplete = "off";
      const fieldProps: FieldProps = {
        field: {
          type: expectedType,
        },
        label: "Text Field",
        name: expectedName,
      };

      renderWithProviders(<Field {...fieldProps} />);

      const resultField = screen.queryByLabelText(fieldProps.name) as HTMLInputElement;

      expect(resultField).toBeInTheDocument();
      expect(resultField).toHaveAttribute("type", expectedType.toLowerCase());
      expect(resultField).toHaveAttribute("name", expectedName);
      expect(resultField).not.toHaveAttribute("required");
      expect(resultField).toHaveAttribute("autocomplete", expectedAutoComplete);
    });
  });

  describe("When it is rendered a textArea input field", () => {
    test("Then it should show on the screen a input field", async () => {
      const expectedStyleCols = 50;
      const expectedStyleRows = 5;
      const expectedName = "textAreaField";
      const fieldProps: FieldProps = {
        field: {
          type: "TEXTAREA",
          styles: {
            cols: expectedStyleCols,
            rows: expectedStyleRows,
          },
        },
        label: "TextArea Field",
        name: expectedName,
      };

      renderWithProviders(<Field {...fieldProps} />);

      const resultField = screen.queryByLabelText(fieldProps.name) as HTMLInputElement;

      expect(resultField).toBeInTheDocument();
      expect(resultField).toHaveAttribute("name", expectedName);
      expect(resultField).toHaveAttribute("cols", `${expectedStyleCols}`);
      expect(resultField).toHaveAttribute("rows", `${expectedStyleRows}`);
    });
  });

  describe("When it is rendered a number input field", () => {
    test("Then it should show on the screen a input field", async () => {
      const expectedType = "NUMBER";
      const expectedMin = 1;
      const expectedMax = 5;
      const expectedName = "numberField";
      const fieldProps: FieldProps = {
        field: {
          type: expectedType,
          min: expectedMin,
          max: expectedMax,
        },
        label: "Number Field",
        name: expectedName,
      };

      renderWithProviders(<Field {...fieldProps} />);

      const resultField = screen.queryByLabelText(fieldProps.name) as HTMLInputElement;

      expect(resultField).toBeInTheDocument();
      expect(resultField).toHaveAttribute("name", expectedName);
      expect(resultField).toHaveAttribute("min", `${expectedMin}`);
      expect(resultField).toHaveAttribute("max", `${expectedMax}`);
    });
  });

  describe("When it is rendered a checkbox input field", () => {
    test("Then it should show on the screen a input field", async () => {
      const expectedType = "CHECKBOX";
      const expectedName = "checkboxField";
      const fieldProps: FieldProps = {
        field: {
          type: expectedType,
        },
        label: "Checkbox Field",
        name: expectedName,
      };

      renderWithProviders(<Field {...fieldProps} />);

      const resultField = screen.queryByLabelText(fieldProps.name) as HTMLInputElement;

      expect(resultField).toBeInTheDocument();
      expect(resultField).toHaveAttribute("name", expectedName);
    });

    test("Then it should show on the screen a input field", async () => {
      const mockOnClick = jest.fn();
      const expectedType = "CHECKBOX";
      const expectedName = "checkboxField";
      const fieldProps: FieldProps = {
        field: {
          type: expectedType,
          onChange: mockOnClick,
        },
        label: "Checkbox Field",
        name: expectedName,
      };

      renderWithProviders(<Field {...fieldProps} />);

      const resultField = screen.queryByLabelText(fieldProps.name) as HTMLInputElement;
      await userEvent.click(resultField);

      expect(resultField).toBeInTheDocument();
      expect(resultField).toHaveAttribute("name", expectedName);
      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
