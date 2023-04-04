import renderWithProviders from "@/__mocks__/renderWithProviders";
import ClientWithoutPage from "@/pages/client";
import { screen } from "@testing-library/react";

describe("Given a ClientWithoutPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a text 'No customer has been selectedn'", async () => {
      const expectedText = "No customer has been selected";

      renderWithProviders(<ClientWithoutPage />);

      const resultText = screen.queryByText(expectedText);

      expect(resultText).toBeInTheDocument();
      expect(resultText).toHaveTextContent(expectedText);
    });
  });
});
