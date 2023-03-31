import type { ClientState } from "@/types/clientTypes";
import type { UiState } from "@/types/uiTypes";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import { clientReducer } from "./features/clientSlice/clientSlice";
import { uiReducer } from "./features/uiSlice/uiSlice";

export const makeStore = (preloadedState?: { [x: string]: UiState | ClientState }) =>
  configureStore({
    preloadedState,
    reducer: {
      ui: uiReducer,
      client: clientReducer,
    },
    middleware: [thunk],
  });

const store = () => makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const wrapper = createWrapper<AppStore>(store);
