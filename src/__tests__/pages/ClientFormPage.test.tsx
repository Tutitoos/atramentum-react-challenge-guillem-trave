import { mockClient } from "@/__mocks__/mockClients";
import renderWithProviders from "@/__mocks__/renderWithProviders";
import ClientFormPage, { getServerSideProps } from "@/pages/client/[id]";
import { clientInitialState } from "@/redux/features/clientSlice/clientSlice";
import { screen } from "@testing-library/react";
import { GetServerSidePropsContext } from "next/types";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given a ClientFormPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title 'Client 1' and form", async () => {
      const expectedTitle = `Client ${mockClient.id}`;
      const expectedFormButton = "Save";

      const context: Partial<GetServerSidePropsContext> = {
        query: {
          id: `${mockClient.id}`,
        },
      };

      const serverSideProps = await getServerSideProps(context as GetServerSidePropsContext);

      renderWithProviders(<ClientFormPage />, {
        preloadedState: {
          client: {
            ...clientInitialState,
            client: mockClient,
          },
        },
      });

      const resultTitle = screen.queryByRole("heading", {
        level: 2,
        name: expectedTitle,
      });
      const resultFormButton = screen.queryByRole("button", {
        name: expectedFormButton,
      });

      expect(resultTitle).toBeInTheDocument();
      expect(resultFormButton).toBeInTheDocument();
      expect(resultTitle).toHaveTextContent(expectedTitle);
      expect(resultFormButton).toHaveTextContent(expectedFormButton);
      expect(serverSideProps).toHaveProperty("props");
    });

    test("Then it should redirect to home with a query id is empty", async () => {
      const expectedRedirect = {
        permanent: false,
        destination: "/",
      };
      const context: Partial<GetServerSidePropsContext> = {
        query: {
          id: "",
        },
      };

      const serverSideProps = await getServerSideProps(context as GetServerSidePropsContext);

      renderWithProviders(<ClientFormPage />);

      expect(serverSideProps).toHaveProperty("redirect", expectedRedirect);
    });
  });
});
