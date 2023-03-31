import { Draft, PayloadAction } from "@reduxjs/toolkit";
import type { ClientState } from "../../../../types/clientTypes";

const hydrate = (
  state: Draft<ClientState>,
  action: PayloadAction<{
    client: ClientState;
  }>
) => {
  return {
    ...state,
    ...action.payload.client,
  };
};

export default hydrate;
