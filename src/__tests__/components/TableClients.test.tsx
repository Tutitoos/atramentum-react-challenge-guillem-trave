import TableClients from "@/components/TableClients/TableClients";
import { mockClient, mockClients } from "@/__mocks__/mockClients";
import renderWithProviders from "@/__mocks__/renderWithProviders";
import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given a TableClients component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a table", () => {
      const expectedTableRows = 4;
      const expectedTableData = 24;

      renderWithProviders(<TableClients clients={mockClients} />);

      const resultTable = screen.queryByRole("table");
      const resultTableRows = screen.queryAllByRole("row");
      const resultTableData = screen.queryAllByRole("cell");

      expect(resultTable).toBeInTheDocument();
      expect(resultTableRows.length).toBe(expectedTableRows);
      expect(resultTableData.length).toBe(expectedTableData);
    });

    test("Then it should show a table with the clients data", async () => {
      const expectedClient = mockClient;
      const mockActionEdit = jest.fn();
      const mockActionSelect = jest.fn();

      renderWithProviders(<TableClients clients={mockClients} />);

      const resultTableRows = screen.queryAllByRole("row");
      const resultTableCells = within(resultTableRows[1]).queryAllByRole("cell");
      const resultTableRowActionSelect = resultTableRows[1];
      resultTableRowActionSelect.onclick = mockActionSelect;

      const [id, name, email, sector, category, deleted, actived, actions] = resultTableCells;

      const resultTableActionEdit = within(actions).queryByRole("img") as HTMLImageElement;
      resultTableActionEdit.onclick = mockActionEdit;

      await userEvent.click(resultTableActionEdit);

      expect(id).toBeInTheDocument();
      expect(name).toBeInTheDocument();
      expect(email).toBeInTheDocument();
      expect(sector).toBeInTheDocument();
      expect(category).toBeInTheDocument();
      expect(deleted).toBeInTheDocument();
      expect(actived).toBeInTheDocument();
      expect(actions).toBeInTheDocument();
      expect(resultTableActionEdit).toBeInTheDocument();
      expect(id).toHaveTextContent(`${expectedClient.id}`);
      expect(name).toHaveTextContent(expectedClient.contactName);
      expect(email).toHaveTextContent(expectedClient.email);
      expect(sector).toHaveTextContent(`${expectedClient.sector.id}`);
      expect(category).toHaveTextContent(`${expectedClient.category.id}`);
      expect(deleted).toHaveTextContent(expectedClient.deleted ? "Yes" : "No");
      expect(actived).toHaveTextContent(expectedClient.actived ? "Yes" : "No");
      expect(mockActionSelect).toHaveBeenCalled();
      expect(mockActionEdit).toHaveBeenCalled();
    });
  });
});
