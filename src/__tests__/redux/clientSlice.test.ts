import { HYDRATE } from "next-redux-wrapper";
import { mockClient, mockClients, mockClientsApiRaw } from "../../__mocks__/mockClients";
import {
  clientInitialState,
  clientReducer,
  loadClientActionCreator,
  loadClientsActionCreator,
} from "../../redux/features/clientSlice/clientSlice";
import hydrate from "../../redux/features/clientSlice/reducers/hydrate";
import type { ClientState } from "@/types/clientTypes";

describe("Given clientReducer", () => {
  describe("When it recieves an initial state with an empty client and 'unknown' action", () => {
    test("Then it should return a new state with a copy of the empty client", () => {
      const expectedCurrentState: ClientState = clientInitialState;

      const unknownAction = {
        type: "unknownAction",
        payload: expectedCurrentState,
      };

      const newState = clientReducer(expectedCurrentState, unknownAction);

      expect(newState).toStrictEqual(expectedCurrentState);
    });
  });

  describe("When it recieves an clients and 'loadClients' action", () => {
    test("Then it should return a new state with a copy of the client", () => {
      const expectedCurrentState: ClientState = { ...clientInitialState, clients: mockClients };

      const loadClientsAction = loadClientsActionCreator(mockClientsApiRaw);
      const newState = clientReducer(expectedCurrentState, loadClientsAction);

      expect(newState).toStrictEqual(expectedCurrentState);
    });
  });

  describe("When it recieves an client and 'loadClient' action", () => {
    test("Then it should return a new state with a copy of the client", () => {
      const expectedCurrentState: ClientState = { ...clientInitialState, client: { ...mockClient } };

      const loadClientAction = loadClientActionCreator(mockClient);
      const newState = clientReducer(expectedCurrentState, loadClientAction);

      expect(newState).toStrictEqual(expectedCurrentState);
    });
  });

  describe("When it recieves an initial state with an empty client and '__NEXT_REDUX_WRAPPER_HYDRATE__' action", () => {
    test("Then it should return a new state with a copy of the client list", () => {
      const expectedCurrentState: ClientState = clientInitialState;

      const hydrateAction = hydrate(expectedCurrentState, {
        type: HYDRATE,
        payload: {
          client: expectedCurrentState,
        },
      });

      expect(hydrateAction).toStrictEqual(expectedCurrentState);
    });
  });
});
