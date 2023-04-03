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
      const expectedClient = mockClient;
      const expectedClientBankAccount = `${expectedClient.bankAccount.id} - ${expectedClient.bankAccount.name}`;
      const expectedClientSector = `${expectedClient.sector.id} - ${expectedClient.sector.name}`;
      const expectedClientCategory = `${expectedClient.category.id} - ${expectedClient.category.name}`;
      const expectedClientActived = "No";
      const expectedClientDeleted = "Yes";

      renderWithProviders(<ClientDetails client={mockClient} />);

      const resultTitleId = screen.queryByText(expectedClient.id) as HTMLSpanElement;
      const resultClientName = screen.queryByText(expectedClient.contactName) as HTMLSpanElement;
      const resultClientEmail = screen.queryByText(expectedClient.email) as HTMLSpanElement;
      const resultClientPhone1 = screen.queryByText(expectedClient.phones[0]) as HTMLSpanElement;
      const resultClientPhone2 = screen.queryByText(expectedClient.phones[1]) as HTMLSpanElement;
      const resultClientBankAccount = screen.queryByText(expectedClientBankAccount) as HTMLSpanElement;
      const resultClientSector = screen.queryByText(expectedClientSector) as HTMLSpanElement;
      const resultClientCategory = screen.queryByText(expectedClientCategory) as HTMLSpanElement;
      const resultClientActived = screen.queryByText(expectedClientActived) as HTMLSpanElement;
      const resultClientDeleted = screen.queryByText(expectedClientDeleted) as HTMLSpanElement;
      const resultClientObservations = screen.queryByText(expectedClient.observations) as HTMLSpanElement;

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
      expect(resultTitleId.textContent).toStrictEqual(`${expectedClient.id}`);
      expect(resultClientName.textContent).toStrictEqual(expectedClient.contactName);
      expect(resultClientEmail.textContent).toStrictEqual(expectedClient.email);
      expect(resultClientPhone1.textContent).toStrictEqual(expectedClient.phones[0]);
      expect(resultClientPhone2.textContent).toStrictEqual(expectedClient.phones[1]);
      expect(resultClientBankAccount.textContent).toStrictEqual(expectedClientBankAccount);
      expect(resultClientSector.textContent).toStrictEqual(expectedClientSector);
      expect(resultClientCategory.textContent).toStrictEqual(expectedClientCategory);
      expect(resultClientActived.textContent).toStrictEqual(expectedClientActived);
      expect(resultClientDeleted.textContent).toStrictEqual(expectedClientDeleted);
      expect(resultClientObservations.textContent).toStrictEqual(expectedClient.observations);
    });

    test("Then it should show a card with client details, with these data Actived (Yes) and Deleted (No)", () => {
      const expectedClientActived = "Yes";
      const expectedClientDeleted = "No";

      renderWithProviders(<ClientDetails client={mockClients[1]} />);

      const resultClientActived = screen.queryByText(expectedClientActived) as HTMLSpanElement;
      const resultClientDeleted = screen.queryByText(expectedClientDeleted) as HTMLSpanElement;

      expect(resultClientActived).toBeInTheDocument();
      expect(resultClientDeleted).toBeInTheDocument();
      expect(resultClientActived.textContent).toStrictEqual(expectedClientActived);
      expect(resultClientDeleted.textContent).toStrictEqual(expectedClientDeleted);
    });
  });
});
