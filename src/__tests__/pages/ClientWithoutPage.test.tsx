import renderWithProviders from "@/__mocks__/renderWithProviders";
import ClientWithoutPage from "@/pages/client";
import { screen } from "@testing-library/react";

describe("Given a ClientWithoutPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a text 'There is no information'", async () => {
      const expectedText = "There is no information";

      renderWithProviders(<ClientWithoutPage />);

      const resultText = screen.queryByText(expectedText);

      expect(resultText).toBeInTheDocument();
      expect(resultText).toHaveTextContent(expectedText);
    });
  });
});
