import ClientForm from "@/components/ClientForm/ClientForm";
import renderWithProviders from "@/__mocks__/renderWithProviders";
import { screen } from "@testing-library/react";

describe("Given a ClientForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a form multiple fields", () => {
      const expectedInput1 = "name";
      const expectedInput2 = "email";
      const expectedInput3 = "phonePrimary";
      const expectedInput4 = "phoneSecondary";
      const expectedInput5 = "bankAccount";
      const expectedInput6 = "sector";
      const expectedInput7 = "category";
      const expectedInput8 = "actived";
      const expectedInput9 = "deleted";
      const expectedInput10 = "observations";
      const expectedButton = "Save";

      renderWithProviders(<ClientForm />);

      const resultField1 = screen.queryByLabelText(expectedInput1) as HTMLInputElement;
      const resultField2 = screen.queryByLabelText(expectedInput2) as HTMLInputElement;
      const resultField3 = screen.queryByLabelText(expectedInput3) as HTMLInputElement;
      const resultField4 = screen.queryByLabelText(expectedInput4) as HTMLInputElement;
      const resultField5 = screen.queryByLabelText(expectedInput5) as HTMLInputElement;
      const resultField6 = screen.queryByLabelText(expectedInput6) as HTMLInputElement;
      const resultField7 = screen.queryByLabelText(expectedInput7) as HTMLInputElement;
      const resultField8 = screen.queryByLabelText(expectedInput8) as HTMLInputElement;
      const resultField9 = screen.queryByLabelText(expectedInput9) as HTMLInputElement;
      const resultField10 = screen.queryByLabelText(expectedInput10) as HTMLInputElement;
      const resultButton = screen.queryByRole("button", {
        name: expectedButton,
      }) as HTMLButtonElement;

      expect(resultField1).toBeInTheDocument();
      expect(resultField2).toBeInTheDocument();
      expect(resultField3).toBeInTheDocument();
      expect(resultField4).toBeInTheDocument();
      expect(resultField5).toBeInTheDocument();
      expect(resultField6).toBeInTheDocument();
      expect(resultField7).toBeInTheDocument();
      expect(resultField8).toBeInTheDocument();
      expect(resultField9).toBeInTheDocument();
      expect(resultField10).toBeInTheDocument();
      expect(resultButton).toBeInTheDocument();
      expect(resultButton).toHaveTextContent(expectedButton);
    });
  });
});
