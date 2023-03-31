import { PayloadAction } from "@reduxjs/toolkit";
import type { Client, ClientState } from "../../../../types/clientTypes";

const loadClient = (previousState: ClientState, action: PayloadAction<Client>) => ({
  ...previousState,
  client: { ...action.payload },
});

export default loadClient;
