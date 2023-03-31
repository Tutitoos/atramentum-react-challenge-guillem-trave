import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import type { UiState } from "../../../types/uiTypes";
import hideLoading from "./reducers/hideLoading";
import hideModal from "./reducers/hideModal";
import hydrate from "./reducers/hydrate";
import showLoading from "./reducers/showLoading";
import showModal from "./reducers/showModal";

export const uiInitialState: UiState = {
  isLoading: false,
  modal: {
    isOpen: false,
    isError: false,
    text: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    showLoading,
    hideLoading,
    showModal,
    hideModal,
  },
  extraReducers: (builder) => {
    builder.addMatcher((action) => action.type.includes(HYDRATE), hydrate);
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showModal: showModalActionCreator,
  hideModal: hideModalActionCreator,
} = uiSlice.actions;
