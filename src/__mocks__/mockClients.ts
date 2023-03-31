import type { Client, Clients } from "@/types/clientTypes";

export const mockClients: Clients = [
  {
    id: 1,
    email: "cliente1@example.com",
    phones: ["+123456789", "+987654321"],
    contactName: "Juan Pérez",
    sector: {
      id: 2,
      name: "Finanzas",
    },
    category: {
      id: 1,
      name: "Premium",
    },
    observations: "Cliente muy importante",
    bankAccount: {
      id: 345,
      name: "Banco Central",
    },
    deleted: true,
    actived: true,
  },

  {
    id: 2,
    email: "cliente2@example.com",
    phones: ["+5551234567"],
    contactName: "María García",
    sector: {
      id: 3,
      name: "Ventas",
    },
    category: {
      id: 2,
      name: "Estándar",
    },
    observations: "Cliente potencial",
    bankAccount: {
      id: 123,
      name: "Banco Internacional",
    },
    deleted: false,
    actived: false,
  },
  {
    id: 5,
    email: "cliente5@example.com",
    phones: ["+5559876543", "+5558765432"],
    contactName: "Javier Sánchez",
    sector: {
      id: 2,
      name: "Marketing",
    },
    category: {
      id: 1,
      name: "Premium",
    },
    observations: "Muy buen cliente",
    bankAccount: {
      id: 456,
      name: "Banco Nacional",
    },
    deleted: true,
    actived: false,
  },
];

export const mockClient: Client = mockClients[0];
