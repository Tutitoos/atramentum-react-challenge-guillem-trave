import { screen } from "@testing-library/react";
import Layout from "@/components/Layout/Layout";
import renderWithProviders from "@/__mocks__/renderWithProviders";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header and the children content", async () => {
      const expectedTitle = "Atramentum";
      const expectedBodyText = "Test content";

      renderWithProviders(
        <Layout>
          <div>Test content</div>
        </Layout>
      );

      const resultTitle = screen.queryByRole("heading", {
        level: 1,
        name: expectedTitle,
      }) as HTMLHeadingElement;
      const resultBodyText = screen.queryByText(expectedBodyText) as HTMLElement;

      expect(resultTitle).toBeInTheDocument();
      expect(resultBodyText).toBeInTheDocument();
      expect(resultTitle.textContent).toStrictEqual(expectedTitle);
      expect(resultBodyText.textContent).toStrictEqual(expectedBodyText);
    });
  });
});
