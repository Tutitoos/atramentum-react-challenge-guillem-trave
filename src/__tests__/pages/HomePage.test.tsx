import renderWithProviders from "@/__mocks__/renderWithProviders";
import HomePage, { getServerSideProps } from "@/pages";
import { screen } from "@testing-library/react";
import { GetServerSidePropsContext } from "next/types";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given a HomePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a TableClients and ClientDetails", async () => {
      const expectedClientDetailsTitle = "Client information:";

      renderWithProviders(<HomePage />);

      const resultTableClients = screen.queryByRole("table");
      const resultClientDetails = screen.queryByRole("heading", {
        level: 2,
        name: expectedClientDetailsTitle,
      });

      await getServerSideProps({} as GetServerSidePropsContext);

      expect(resultTableClients).toBeInTheDocument();
      expect(resultClientDetails).toBeInTheDocument();
    });
  });
});
