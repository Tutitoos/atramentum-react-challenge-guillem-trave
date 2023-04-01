import type { Client, ClientApi, Clients, ClientsApiRaw } from "@/types/clientTypes";

export const mockClients: Clients = [
  {
    id: 1,
    email: "cliente1@example.com",
    phones: ["+123456789", "+987654321"],
    contactName: "Juan Pérez",
    sector: {
      id: 2,
      name: "unknown",
    },
    category: {
      id: 1,
      name: "unknown",
    },
    observations: "Cliente muy importante",
    bankAccount: {
      id: 345,
      name: "unknown",
    },
    deleted: true,
    actived: false,
  },
  {
    id: 2,
    email: "cliente2@example.com",
    phones: ["+5551234567"],
    contactName: "María García",
    sector: {
      id: 3,
      name: "unknown",
    },
    category: {
      id: 2,
      name: "unknown",
    },
    observations: "Cliente potencial",
    bankAccount: {
      id: 123,
      name: "unknown",
    },
    deleted: false,
    actived: true,
  },
  {
    id: 5,
    email: "cliente5@example.com",
    phones: ["+5559876543", "+5558765432"],
    contactName: "Javier Sánchez",
    sector: {
      id: 2,
      name: "unknown",
    },
    category: {
      id: 1,
      name: "unknown",
    },
    observations: "Muy buen cliente",
    bankAccount: {
      id: 456,
      name: "unknown",
    },
    deleted: true,
    actived: true,
  },
];

export const mockClient: Client = mockClients[0];

export const mockClientsApiRaw: ClientsApiRaw = {
  totalElements: 9,
  totalPages: 1,
  pageNumber: 0,
  isLast: true,
  isFirst: true,
  pageSize: 10,
  sort: {
    sorted: true,
  },
  pageable: {
    offset: 0,
    paged: true,
  },
  content: [
    {
      id: 1,
      phone1: "+123456789",
      phone2: "+987654321",
      sectorId: 2,
      activated: false,
      agreeCommercials: false,
      agreeTerms: true,
      email: "cliente1@example.com",
      password: "",
      originPage: 1,
      commercialAgentId: null,
      customerCategoryId: 1,
      fareRateId: 1,
      sendCsvDaily: true,
      sendCsvWeekly: true,
      dataCsvFtp: "NAME1",
      refererTypeId: 67,
      refererOthersInfo: "DESCRIPTION1",
      performanceTypeId: 72,
      observations: "Cliente muy importante",
      canContactPhone: false,
      canSendMail: false,
      contactName: "Juan Pérez",
      contactTime: "DESCRIPTION3",
      numberAccessWeb: 2,
      preferredCompanyBankAccountId: 345,
      eccomerceId: null,
      downloadCsv: true,
      ordersOnlyPaymentProof: true,
      ordersOnlyMoneyInAccount: false,
      deleted: true,
      createdBy: "ADMIN",
      createdDate: "2021-04-03T15:23:12.444",
      lastModifiedBy: "16-leqgyhuth",
      lastModifiedDate: "2023-03-31T10:29:28.376112",
    },
    {
      id: 2,
      phone1: "+5551234567",
      phone2: null,
      sectorId: 3,
      activated: true,
      agreeCommercials: false,
      agreeTerms: true,
      email: "cliente2@example.com",
      password: "",
      originPage: 1,
      commercialAgentId: null,
      customerCategoryId: 2,
      fareRateId: 1,
      sendCsvDaily: true,
      sendCsvWeekly: true,
      dataCsvFtp: "NAME1",
      refererTypeId: 67,
      refererOthersInfo: "DESCRIPTION1",
      performanceTypeId: 72,
      observations: "Cliente potencial",
      canContactPhone: false,
      canSendMail: false,
      contactName: "María García",
      contactTime: "DESCRIPTION3",
      numberAccessWeb: 2,
      preferredCompanyBankAccountId: 123,
      eccomerceId: null,
      downloadCsv: true,
      ordersOnlyPaymentProof: true,
      ordersOnlyMoneyInAccount: false,
      deleted: false,
      createdBy: "ADMIN",
      createdDate: "2021-04-03T15:23:12.444",
      lastModifiedBy: "16-leqgyhuth",
      lastModifiedDate: "2023-03-31T10:29:28.376112",
    },
    {
      id: 5,
      phone1: "+5559876543",
      phone2: "+5558765432",
      sectorId: 2,
      activated: true,
      agreeCommercials: false,
      agreeTerms: true,
      email: "cliente5@example.com",
      password: "",
      originPage: 1,
      commercialAgentId: null,
      customerCategoryId: 1,
      fareRateId: 1,
      sendCsvDaily: true,
      sendCsvWeekly: true,
      dataCsvFtp: "NAME1",
      refererTypeId: 67,
      refererOthersInfo: "DESCRIPTION1",
      performanceTypeId: 72,
      observations: "Muy buen cliente",
      canContactPhone: false,
      canSendMail: false,
      contactName: "Javier Sánchez",
      contactTime: "DESCRIPTION3",
      numberAccessWeb: 2,
      preferredCompanyBankAccountId: 456,
      eccomerceId: null,
      downloadCsv: true,
      ordersOnlyPaymentProof: true,
      ordersOnlyMoneyInAccount: false,
      deleted: true,
      createdBy: "ADMIN",
      createdDate: "2021-04-03T15:23:12.444",
      lastModifiedBy: "16-leqgyhuth",
      lastModifiedDate: "2023-03-31T10:29:28.376112",
    },
  ],
  objectType: "CustomerDTOPagedList",
};

export const mockClientApiRaw: ClientApi = mockClientsApiRaw.content[0];
