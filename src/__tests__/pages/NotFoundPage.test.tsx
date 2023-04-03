import renderWithProviders from "@/__mocks__/renderWithProviders";
import NotFoundPage from "@/pages/404";
import { screen } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given a NotFoundPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title 'Page not found' and link to home", async () => {
      const expectedTitle = "Page not found";
      const expectedLink = "Back to home";

      renderWithProviders(<NotFoundPage />);

      const resultTitle = screen.queryByRole("heading", {
        level: 2,
        name: expectedTitle,
      });
      const resultLink = screen.queryByRole("link", {
        name: expectedLink,
      });

      expect(resultTitle).toBeInTheDocument();
      expect(resultLink).toBeInTheDocument();
    });
  });
});
