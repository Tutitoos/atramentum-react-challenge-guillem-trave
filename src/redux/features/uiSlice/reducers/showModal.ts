import { PayloadAction } from "@reduxjs/toolkit";
import { UiState, UiModalState } from "../../../../types/uiTypes";

const showModal = (previousState: UiState, action: PayloadAction<UiModalState>) => ({
  ...previousState,
  modal: { ...action.payload, isOpen: true },
});

export default showModal;
