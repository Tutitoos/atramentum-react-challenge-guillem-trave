import { PayloadAction } from "@reduxjs/toolkit";
import type { Clients, ClientState } from "../../../../types/clientTypes";

const loadClients = (previousState: ClientState, action: PayloadAction<Clients>) => ({
  ...previousState,
  clients: [...action.payload],
});

export default loadClients;
