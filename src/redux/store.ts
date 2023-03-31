import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import { uiReducer } from "./features/uiSlice/uiSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      ui: uiReducer,
    },
    middleware: [thunk],
  });

const store = () => makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const wrapper = createWrapper<AppStore>(store);
