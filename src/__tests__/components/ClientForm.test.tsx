import ClientForm from "@/components/ClientForm/ClientForm";
import { mockClient } from "@/__mocks__/mockClients";
import renderWithProviders from "@/__mocks__/renderWithProviders";
import { screen, fireEvent } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given a ClientForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a form multiple fields", async () => {
      const expectedInput1 = "name";
      const expectedInput1Value = "Paco";
      const expectedInput2 = "email";
      const expectedInput2Value = "email@gmail.com";
      const expectedInput3 = "phonePrimary";
      const expectedInput3Value = "+34600000000";
      const expectedInput4 = "phoneSecondary";
      const expectedInput4Value = "+34600000001";
      const expectedInput5 = "bankAccount";
      const expectedInput5Value = "1234567890";
      const expectedInput6 = "sector";
      const expectedInput6Value = "1";
      const expectedInput7 = "category";
      const expectedInput7Value = "2";
      const expectedInput8 = "actived";
      const expectedInput9 = "deleted";
      const expectedInput10 = "observations";
      const expectedInput10Value = "Client form...";
      const expectedButton = "Save";

      renderWithProviders(<ClientForm client={mockClient} />);

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

      await fireEvent.change(resultField1, { target: { value: expectedInput1Value } });
      await fireEvent.change(resultField2, { target: { value: expectedInput2Value } });
      await fireEvent.change(resultField3, { target: { value: expectedInput3Value } });
      await fireEvent.change(resultField4, { target: { value: expectedInput4Value } });
      await fireEvent.change(resultField5, { target: { value: expectedInput5Value } });
      await fireEvent.change(resultField6, { target: { value: expectedInput6Value } });
      await fireEvent.change(resultField7, { target: { value: expectedInput7Value } });
      await fireEvent.click(resultField8);
      await fireEvent.click(resultField9);
      await fireEvent.change(resultField10, { target: { value: expectedInput10Value } });
      await fireEvent.click(resultButton);

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
      expect(resultField1).toHaveValue(expectedInput1Value);
      expect(resultField2).toHaveValue(expectedInput2Value);
      expect(resultField3).toHaveValue(expectedInput3Value);
      expect(resultField4).toHaveValue(expectedInput4Value);
      expect(resultField5).toHaveValue(+expectedInput5Value);
      expect(resultField6).toHaveValue(+expectedInput6Value);
      expect(resultField7).toHaveValue(+expectedInput7Value);
      expect(resultField8).toBeChecked();
      expect(resultField9).not.toBeChecked();
      expect(resultField10).toHaveValue(expectedInput10Value);
    });
  });
});
