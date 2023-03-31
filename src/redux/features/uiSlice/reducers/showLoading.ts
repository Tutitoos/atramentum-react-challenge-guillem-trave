import { UiState } from "../../../../types/uiTypes";

const showLoading = (previousState: UiState) => ({
  ...previousState,
  isLoading: true,
});

export default showLoading;
