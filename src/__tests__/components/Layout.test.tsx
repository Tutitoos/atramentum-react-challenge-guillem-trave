import { screen, waitFor } from "@testing-library/react";
import Layout from "@/components/Layout/Layout";
import renderWithProviders from "@/__mocks__/renderWithProviders";
import useSession from "@/hooks/useSession";
import { mockSessionToken } from "@/__mocks__/mockSession";

const sessionMock = {
  getSession: jest.fn().mockReturnValue(mockSessionToken),
  getToken: jest.fn().mockReturnValue(null),
  setToken: jest.fn(),
};

jest.mock("../../hooks/useSession");

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header and the children content", async () => {
      const expectedTitle = "Atramentum";
      const expectedBodyText = "Test content";

      const useSessionMock = useSession as jest.MockedFunction<typeof useSession>;
      useSessionMock.mockReturnValue(sessionMock);

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

      await waitFor(() => {
        expect(sessionMock.getToken).toHaveBeenCalled();
        expect(sessionMock.getSession).toHaveBeenCalled();
        expect(sessionMock.setToken).toHaveBeenCalled();
      });
    });
  });
});
