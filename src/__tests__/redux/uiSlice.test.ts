import type { UiModal, UiState } from "@/types/uiTypes";
import { HYDRATE } from "next-redux-wrapper";
import hydrate from "../../redux/features/uiSlice/reducers/hydrate";
import {
  hideLoadingActionCreator,
  hideModalActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
  uiInitialState,
  uiReducer,
} from "../../redux/features/uiSlice/uiSlice";

describe("Given uiReducer", () => {
  describe("When it recieves an initial state with an empty ui and 'unknown' action", () => {
    test("Then it should return a new state with a copy of the empty ui", () => {
      const expectedCurrentState: UiState = uiInitialState;

      const unknownAction = {
        type: "unknownAction",
        payload: uiInitialState,
      };
      const newState = uiReducer(expectedCurrentState, unknownAction);

      expect(newState).toStrictEqual(expectedCurrentState);
    });
  });

  describe("When it recieves an initial state with an empty ui and 'showLoading' action", () => {
    test("Then it should return a new state with a copy of the ui", () => {
      const expectedCurrentState: UiState = { ...uiInitialState, isLoading: true };

      const showLoadingAction = showLoadingActionCreator();
      const newState = uiReducer(expectedCurrentState, showLoadingAction);

      expect(newState).toStrictEqual(expectedCurrentState);
    });
  });

  describe("When it recieves an initial state with an empty ui and 'hideLoading' action", () => {
    test("Then it should return a new state with a copy of the ui", () => {
      const expectedCurrentState: UiState = { ...uiInitialState, isLoading: false };

      const hideLoadingAction = hideLoadingActionCreator();
      const newState = uiReducer(expectedCurrentState, hideLoadingAction);

      expect(newState).toStrictEqual(expectedCurrentState);
    });
  });

  describe("When it recieves an initial state with an empty ui and 'showModal' action", () => {
    test("Then it should return a new state with a copy of the ui", () => {
      const uiModal: UiModal = {
        isOpen: true,
        isError: false,
        text: "",
      };
      const expectedCurrentState: UiState = { ...uiInitialState, modal: { ...uiModal } };

      const showLoadingAction = showModalActionCreator(uiModal);
      const newState = uiReducer(expectedCurrentState, showLoadingAction);

      expect(newState).toStrictEqual(expectedCurrentState);
    });
  });

  describe("When it recieves an initial state with an empty ui and 'hideModal' action", () => {
    test("Then it should return a new state with a copy of the ui", () => {
      const uiModal: UiModal = {
        isOpen: false,
        isError: false,
        text: "",
      };
      const expectedCurrentState: UiState = { ...uiInitialState, modal: { ...uiModal } };

      const hideLoadingAction = hideModalActionCreator();
      const newState = uiReducer(expectedCurrentState, hideLoadingAction);

      expect(newState).toStrictEqual(expectedCurrentState);
    });
  });

  describe("When it recieves an initial state with an empty ui and '__NEXT_REDUX_WRAPPER_HYDRATE__' action", () => {
    test("Then it should return a new state with a copy of the ui", () => {
      const expectedCurrentState: UiState = uiInitialState;

      const hydrateAction = hydrate(uiInitialState, {
        type: HYDRATE,
        payload: {
          ui: uiInitialState,
        },
      });

      expect(hydrateAction).toStrictEqual(expectedCurrentState);
    });
  });
});
