import useApi from "@/hooks/useApi";
import { mockClientsApiRaw } from "@/__mocks__/mockClients";
import { mockSessionToken } from "@/__mocks__/mockSession";
import { renderHook } from "@testing-library/react";
import axios from "axios";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a useSession hook", () => {
  describe("When it's function getClients is called", () => {
    test("Then it should return clients list", async () => {
      const {
        result: { current },
      } = renderHook(() => useApi(mockSessionToken));

      axios.get = jest.fn().mockReturnValue({
        data: mockClientsApiRaw,
      });
      const response = await current.getClients({});

      expect(response).toEqual(mockClientsApiRaw);
    });

    test("Then it should return without clients list", async () => {
      const {
        result: { current },
      } = renderHook(() => useApi(mockSessionToken));

      axios.get = jest.fn().mockRejectedValue(null);
      const response = await current.getClients({});

      expect(response).toEqual(null);
    });
  });
});
