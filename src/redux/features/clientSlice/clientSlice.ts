import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import type { ClientState } from "../../../types/clientTypes";
import hydrate from "./reducers/hydrate";
import loadClients from "./reducers/loadClients";
import loadClient from "./reducers/loadClient";

export const clientInitialState: ClientState = {
  clients: [],
  client: {
    id: 0,
    email: "",
    phones: [],
    contactName: "",
    sector: {
      id: 0,
      name: "",
    },
    category: {
      id: 0,
      name: "",
    },
    observations: "",
    bankAccount: {
      id: 0,
      name: "",
    },
    deleted: false,
    actived: false,
  },
};

const clientSlice = createSlice({
  name: "client",
  initialState: clientInitialState,
  reducers: {
    loadClients,
    loadClient,
  },
  extraReducers: (builder) => {
    builder.addMatcher((action) => action.type.includes(HYDRATE), hydrate);
  },
});

export const clientReducer = clientSlice.reducer;
export const { loadClients: loadClientsActionCreator, loadClient: loadClientActionCreator } = clientSlice.actions;
