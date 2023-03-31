import { Draft, PayloadAction } from "@reduxjs/toolkit";
import type { UiState } from "../../../../types/uiTypes";

const hydrate = (
  state: Draft<UiState>,
  action: PayloadAction<{
    ui: UiState;
  }>
) => {
  return {
    ...state,
    ...action.payload.ui,
  };
};

export default hydrate;
