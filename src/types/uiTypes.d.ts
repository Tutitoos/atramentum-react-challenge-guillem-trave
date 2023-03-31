export interface UiState {
  isLoading: boolean;
  modal: UiModal;
}

export interface UiModal {
  isOpen: boolean;
  isError: boolean;
  text: string;
}

export interface UiModalState {
  isError: boolean;
  text: string;
}
