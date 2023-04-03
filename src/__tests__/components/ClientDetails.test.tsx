import { screen } from "@testing-library/react";
import ClientDetails from "@/components/ClientDetails/ClientDetails";
import { mockClient, mockClients } from "@/__mocks__/mockClients";
import renderWithProviders from "@/__mocks__/renderWithProviders";

describe("Given a ClientDetails component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a card", () => {
      const expectedTitle = "Client information:";
      const expectedTitleId = "ID:";
      const expectedTitleName = "Name:";
      const expectedTitleEmail = "Email:";
      const expectedTitlePhones = "Phone:";
      const expectedTitleBankAccount = "Bank Account:";
      const expectedTitleSector = "Sector:";
      const expectedTitleCategory = "Category:";
      const expectedTitleActived = "Actived:";
      const expectedTitleDeleted = "Deleted:";
      const expectedTitleObservations = "Observations:";

      renderWithProviders(<ClientDetails client={mockClient} />);

      const resultTitle = screen.queryByRole("heading", {
        name: expectedTitle,
        level: 2,
      }) as HTMLHeadingElement;
      const resultTitleId = screen.queryByRole("heading", {
        name: expectedTitleId,
        level: 3,
      }) as HTMLHeadingElement;
      const resultTitleName = screen.queryByRole("heading", {
        name: expectedTitleName,
        level: 3,
      }) as HTMLHeadingElement;
      const resultTitleEmail = screen.queryByRole("heading", {
        name: expectedTitleEmail,
        level: 3,
      }) as HTMLHeadingElement;
      const resultTitlePhones = screen.queryByRole("heading", {
        name: expectedTitlePhones,
        level: 3,
      }) as HTMLHeadingElement;
      const resultTitleBankAccount = screen.queryByRole("heading", {
        name: expectedTitleBankAccount,
        level: 3,
      }) as HTMLHeadingElement;
      const resultTitleSector = screen.queryByRole("heading", {
        name: expectedTitleSector,
        level: 3,
      }) as HTMLHeadingElement;
      const resultTitleCategory = screen.queryByRole("heading", {
        name: expectedTitleCategory,
        level: 3,
      }) as HTMLHeadingElement;
      const resultTitleActived = screen.queryByRole("heading", {
        name: expectedTitleActived,
        level: 3,
      }) as HTMLHeadingElement;
      const resultTitleDeleted = screen.queryByRole("heading", {
        name: expectedTitleDeleted,
        level: 3,
      }) as HTMLHeadingElement;
      const resultTitleObservations = screen.queryByRole("heading", {
        name: expectedTitleObservations,
        level: 3,
      }) as HTMLHeadingElement;

      expect(resultTitle).toBeInTheDocument();
      expect(resultTitleId).toBeInTheDocument();
      expect(resultTitleName).toBeInTheDocument();
      expect(resultTitleEmail).toBeInTheDocument();
      expect(resultTitlePhones).toBeInTheDocument();
      expect(resultTitleBankAccount).toBeInTheDocument();
      expect(resultTitleSector).toBeInTheDocument();
      expect(resultTitleCategory).toBeInTheDocument();
      expect(resultTitleActived).toBeInTheDocument();
      expect(resultTitleDeleted).toBeInTheDocument();
      expect(resultTitleObservations).toBeInTheDocument();
    });

    test("Then it should show a card with a client details", () => {
      const expectedTestIdClientId = "clientId";
      const expectedTestIdClientName = "clientName";
      const expectedTestIdClientEmail = "clientEmail";
      const expectedTestIdClientPhone1 = "clientPhone1";
      const expectedTestIdClientPhone2 = "clientPhone2";
      const expectedTestIdClientBankAccountId = "clientBankAccountId";
      const expectedTestIdClientSectorId = "clientSectorId";
      const expectedTestIdClientCategoryId = "clientCategoryId";
      const expectedTestIdClientActived = "clientActived";
      const expectedTestIdClientDeleted = "clientDeleted";
      const expectedTestIdClientObservations = "clientObservations";
      const expectedClient = mockClient;
      const expectedClientBankAccount = String(expectedClient.bankAccountId);
      const expectedClientSector = String(expectedClient.sectorId);
      const expectedClientCategory = String(expectedClient.categoryId);
      const expectedClientActived = "No";
      const expectedClientDeleted = "Yes";

      renderWithProviders(<ClientDetails client={mockClient} />);

      const resultTitleId = screen.queryByTestId(expectedTestIdClientId) as HTMLSpanElement;
      const resultClientName = screen.queryByTestId(expectedTestIdClientName) as HTMLSpanElement;
      const resultClientEmail = screen.queryByTestId(expectedTestIdClientEmail) as HTMLSpanElement;
      const resultClientPhone1 = screen.queryByTestId(expectedTestIdClientPhone1) as HTMLSpanElement;
      const resultClientPhone2 = screen.queryByTestId(expectedTestIdClientPhone2) as HTMLSpanElement;
      const resultClientBankAccount = screen.queryByTestId(expectedTestIdClientBankAccountId) as HTMLSpanElement;
      const resultClientSector = screen.queryByTestId(expectedTestIdClientSectorId) as HTMLSpanElement;
      const resultClientCategory = screen.queryByTestId(expectedTestIdClientCategoryId) as HTMLSpanElement;
      const resultClientActived = screen.queryByTestId(expectedTestIdClientActived) as HTMLSpanElement;
      const resultClientDeleted = screen.queryByTestId(expectedTestIdClientDeleted) as HTMLSpanElement;
      const resultClientObservations = screen.queryByTestId(expectedTestIdClientObservations) as HTMLSpanElement;

      expect(resultTitleId).toBeInTheDocument();
      expect(resultClientName).toBeInTheDocument();
      expect(resultClientEmail).toBeInTheDocument();
      expect(resultClientPhone1).toBeInTheDocument();
      expect(resultClientPhone2).toBeInTheDocument();
      expect(resultClientBankAccount).toBeInTheDocument();
      expect(resultClientSector).toBeInTheDocument();
      expect(resultClientCategory).toBeInTheDocument();
      expect(resultClientActived).toBeInTheDocument();
      expect(resultClientDeleted).toBeInTheDocument();
      expect(resultClientObservations).toBeInTheDocument();
      expect(resultTitleId).toHaveTextContent(`${expectedClient.id}`);
      expect(resultClientName).toHaveTextContent(expectedClient.contactName);
      expect(resultClientEmail).toHaveTextContent(expectedClient.email);
      expect(resultClientPhone1).toHaveTextContent(expectedClient.phones[0]);
      expect(resultClientPhone2).toHaveTextContent(expectedClient.phones[1]);
      expect(resultClientBankAccount).toHaveTextContent(expectedClientBankAccount);
      expect(resultClientSector).toHaveTextContent(expectedClientSector);
      expect(resultClientCategory).toHaveTextContent(expectedClientCategory);
      expect(resultClientActived).toHaveTextContent(expectedClientActived);
      expect(resultClientDeleted).toHaveTextContent(expectedClientDeleted);
      expect(resultClientObservations).toHaveTextContent(expectedClient.observations);
    });

    test("Then it should show a card with client details, with these data Actived (Yes) and Deleted (No)", () => {
      const expectedClientActived = "Yes";
      const expectedClientDeleted = "No";

      renderWithProviders(<ClientDetails client={mockClients[1]} />);

      const resultClientActived = screen.queryByText(expectedClientActived) as HTMLSpanElement;
      const resultClientDeleted = screen.queryByText(expectedClientDeleted) as HTMLSpanElement;

      expect(resultClientActived).toBeInTheDocument();
      expect(resultClientDeleted).toBeInTheDocument();
      expect(resultClientActived).toHaveTextContent(expectedClientActived);
      expect(resultClientDeleted).toHaveTextContent(expectedClientDeleted);
    });
  });
});
