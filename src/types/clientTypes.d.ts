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
