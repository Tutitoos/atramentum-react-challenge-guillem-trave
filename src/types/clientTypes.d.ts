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
