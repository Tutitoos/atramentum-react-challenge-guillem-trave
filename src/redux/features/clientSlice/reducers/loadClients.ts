import { PayloadAction } from "@reduxjs/toolkit";
import type { Clients, ClientState, ClientsApiRaw } from "../../../../types/clientTypes";

const loadClients = (previousState: ClientState, action: PayloadAction<ClientsApiRaw>) => {
  const newState = action.payload.content.map((client) => ({
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
  })) as Clients;

  return {
    ...previousState,
    clients: [...newState],
  };
};

export default loadClients;
