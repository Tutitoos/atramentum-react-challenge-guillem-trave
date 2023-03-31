import type { UiState } from "../../../../types/uiTypes";
import { uiInitialState } from "../uiSlice";

const hideLoading = (previousState: UiState) => ({
  ...previousState,
  isLoading: uiInitialState.isLoading,
});

export default hideLoading;
