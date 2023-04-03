export interface Client {
  id: number;
  email: string;
  phones: string[];
  contactName: string;
  sector: {
    id: number;
    name: string;
  };
  category: {
    id: number;
    name: string;
  };
  observations: string;
  bankAccount: {
    id: number;
    name: string;
  };
  deleted: boolean;
  actived: boolean;
}

export type Clients = Client[];

export interface ClientState {
  clients: Clients;
  client: Client;
}

export interface Session {
  message: string;
  user: {
    password: null;
    username: string;
    authorities: {
      authority: string;
    }[];
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    enabled: boolean;
    customerIds: any[];
  };
  token: string;
}

export interface ClientsApiRaw {
  totalElements: number;
  totalPages: number;
  pageNumber: number;
  isLast: boolean;
  isFirst: boolean;
  pageSize: number;
  sort: {
    sorted: boolean;
  };
  pageable: {
    offset: number;
    paged: boolean;
  };
  content: ClientApi[];
  objectType: string;
}

export interface ClientApi {
  id: number;
  phone1: string | null;
  phone2: string | null;
  sectorId: number | null;
  activated: boolean;
  agreeCommercials: boolean;
  agreeTerms: boolean;
  email: string;
  password: string;
  originPage: number;
  commercialAgentId: number | null;
  customerCategoryId: number;
  fareRateId: number;
  sendCsvDaily: boolean;
  sendCsvWeekly: boolean;
  dataCsvFtp: string;
  refererTypeId: number;
  refererOthersInfo: string;
  performanceTypeId: number;
  observations: string;
  canContactPhone: boolean;
  canSendMail: boolean;
  contactName: string;
  contactTime: string;
  numberAccessWeb: number;
  preferredCompanyBankAccountId: number | null;
  eccomerceId: number | null;
  downloadCsv: boolean;
  ordersOnlyPaymentProof: boolean;
  ordersOnlyMoneyInAccount: boolean;
  deleted: boolean;
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
}
