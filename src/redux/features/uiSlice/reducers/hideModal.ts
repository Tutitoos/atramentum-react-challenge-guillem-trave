import type { UiState } from "../../../../types/uiTypes";
import { uiInitialState } from "../uiSlice";

const hideModal = (previousState: UiState) => ({
  ...previousState,
  modal: uiInitialState.modal,
});

export default hideModal;
