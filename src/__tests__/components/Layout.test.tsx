import { act, screen } from "@testing-library/react";
import Layout from "@/components/Layout/Layout";
import renderWithProviders from "@/__mocks__/renderWithProviders";
import Router from "next/router";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header and the children content", async () => {
      const expectedTitle = "Atramentum";
      const expectedBodyText = "Test content";

      renderWithProviders(
        <Layout>
          <span>Test content</span>
        </Layout>
      );

      const resultTitle = screen.queryByRole("heading", {
        level: 1,
        name: expectedTitle,
      }) as HTMLHeadingElement;
      const resultBodyText = screen.queryByText(expectedBodyText) as HTMLElement;

      expect(resultTitle).toBeInTheDocument();
      expect(resultBodyText).toBeInTheDocument();
      expect(resultBodyText).toHaveTextContent(expectedBodyText);
    });

    test("Then it should show a loader", async () => {
      const expectedTestId = "spinner";

      renderWithProviders(
        <Layout>
          <span>Test content</span>
        </Layout>,
        {
          preloadedState: {
            ui: {
              isLoading: true,
            },
          },
        }
      );

      const result = screen.queryByTestId(expectedTestId) as HTMLElement;

      expect(result).toBeInTheDocument();
    });

    test("Then it should a change route home to 404", async () => {
      renderWithProviders(
        <Layout>
          <span>Test content</span>
        </Layout>
      );

      Router.pathname = "/404";

      await act(() => {
        Router.events.emit("routeChangeStart");
        Router.events.emit("routeChangeComplete");
        Router.events.emit("routeChangeError");
      });
    });
  });
});
