import Header from "@/components/Header/Header";
import renderWithProviders from "@/__mocks__/renderWithProviders";
import { screen } from "@testing-library/react";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show on the screen a header title", () => {
      const expectedTitle = "Atramentum";

      renderWithProviders(<Header />);

      const resultTitle = screen.queryByRole("heading", {
        level: 1,
        name: expectedTitle,
      }) as HTMLHeadingElement;

      expect(resultTitle).toBeInTheDocument();
    });
  });
});
