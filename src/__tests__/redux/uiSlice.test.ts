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
      const unknownAction = {
        type: "unknownAction",
        payload: uiInitialState,
      };

      const currentState = uiInitialState;

      const newState = uiReducer(currentState, unknownAction);

      expect(newState).toStrictEqual(currentState);
    });
  });

  describe("When it recieves an initial state with an empty ui and 'showLoading' action", () => {
    test("Then it should return a new state with a copy of the ui", () => {
      const showLoadingAction = showLoadingActionCreator();

      const currentState = { ...uiInitialState, isLoading: true };

      const newState = uiReducer(currentState, showLoadingAction);

      expect(newState).toStrictEqual(currentState);
    });
  });

  describe("When it recieves an initial state with an empty ui and 'hideLoading' action", () => {
    test("Then it should return a new state with a copy of the ui", () => {
      const hideLoadingAction = hideLoadingActionCreator();

      const currentState = { ...uiInitialState, isLoading: false };

      const newState = uiReducer(currentState, hideLoadingAction);

      expect(newState).toStrictEqual(currentState);
    });
  });

  describe("When it recieves an initial state with an empty ui and 'showModal' action", () => {
    test("Then it should return a new state with a copy of the ui", () => {
      const uiModal = {
        isOpen: true,
        isError: false,
        text: "",
      };
      const showLoadingAction = showModalActionCreator(uiModal);

      const currentState = { ...uiInitialState, modal: { ...uiModal } };

      const newState = uiReducer(currentState, showLoadingAction);

      expect(newState).toStrictEqual(currentState);
    });
  });

  describe("When it recieves an initial state with an empty ui and 'hideModal' action", () => {
    test("Then it should return a new state with a copy of the ui", () => {
      const uiModal = {
        isOpen: false,
        isError: false,
        text: "",
      };
      const hideLoadingAction = hideModalActionCreator();

      const currentState = { ...uiInitialState, modal: { ...uiModal } };

      const newState = uiReducer(currentState, hideLoadingAction);

      expect(newState).toStrictEqual(currentState);
    });
  });

  describe("When it recieves an initial state with an empty ui and '__NEXT_REDUX_WRAPPER_HYDRATE__' action", () => {
    test("Then it should return a new state with a copy of the ui", () => {
      const hydrateAction = hydrate(uiInitialState, {
        type: HYDRATE,
        payload: {
          ui: uiInitialState,
        },
      });

      const currentState = uiInitialState;

      expect(hydrateAction).toStrictEqual(currentState);
    });
  });
});
