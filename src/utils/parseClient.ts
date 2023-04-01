import { Client, ClientApi, Clients } from "@/types/clientTypes";

export const parseClient = (client: ClientApi) => {
  const newClient = {
    id: client.id,
    email: client.email,
    phones: [client.phone1, client.phone2].filter((phone) => typeof phone === "string"),
    contactName: client.contactName,
    sector: {
      id: client.sectorId!,
      name: "unknown",
    },
    category: {
      id: client.customerCategoryId,
      name: "unknown",
    },
    observations: client.observations,
    bankAccount: {
      id: client.preferredCompanyBankAccountId!,
      name: "unknown",
    },
    deleted: client.deleted,
    actived: client.activated,
  } as Client;

  return newClient;
};

export const parseClients = (clients: ClientApi[]) => {
  const newClientsList = clients.map(parseClient) as Clients;

  return newClientsList;
};
