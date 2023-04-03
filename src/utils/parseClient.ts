import { Client, ClientApi, Clients } from "@/types/clientTypes";

export const parseClient = (client: ClientApi): Client =>
  ({
    id: client.id,
    email: client.email,
    phones: [client.phone1, client.phone2].filter((phone) => typeof phone === "string"),
    contactName: client.contactName,
    sectorId: client.sectorId!,
    categoryId: client.customerCategoryId,
    observations: client.observations,
    bankAccountId: client.preferredCompanyBankAccountId!,
    deleted: client.deleted,
    actived: client.activated,
  } as Client);

export const parseClients = (clients: ClientApi[]): Clients => clients.map(parseClient);
