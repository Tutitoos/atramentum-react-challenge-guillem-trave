import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import type { UiState } from "../../../types/uiTypes";
import hideLoading from "./reducers/hideLoading";
import hydrate from "./reducers/hydrate";
import showLoading from "./reducers/showLoading";

export const uiInitialState: UiState = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    showLoading,
    hideLoading,
  },
  extraReducers: (builder) => {
    builder.addMatcher((action) => action.type.includes(HYDRATE), hydrate);
  },
});

export const uiReducer = uiSlice.reducer;
export const { showLoading: showLoadingActionCreator, hideLoading: hideLoadingActionCreator } = uiSlice.actions;
