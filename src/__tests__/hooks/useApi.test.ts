import useApi from "@/hooks/useApi";
import { mockClientApiRaw, mockClientsApiRaw } from "@/__mocks__/mockClients";
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
      } = renderHook(() => useApi());

      axios.get = jest.fn().mockReturnValue({
        data: mockClientsApiRaw,
      });
      const response = await current.getClients({});

      expect(response).toEqual(mockClientsApiRaw);
    });

    test("Then it should return without clients list", async () => {
      const {
        result: { current },
      } = renderHook(() => useApi());

      axios.get = jest.fn().mockRejectedValue(null);
      const response = await current.getClients({});

      expect(response).toEqual(null);
    });
  });

  describe("When it's function getClient is called", () => {
    test("Then it should return client", async () => {
      const expectedClientId = "1";
      const {
        result: { current },
      } = renderHook(() => useApi());

      axios.get = jest.fn().mockReturnValue({
        data: mockClientApiRaw,
      });
      const response = await current.getClient(expectedClientId);

      expect(response).toEqual(mockClientApiRaw);
    });

    test("Then it should return without client", async () => {
      const expectedClientId = "1";
      const {
        result: { current },
      } = renderHook(() => useApi());

      axios.get = jest.fn().mockRejectedValue(null);
      const response = await current.getClient(expectedClientId);

      expect(response).toEqual(null);
    });
  });

  describe("When it's function updateClient is called", () => {
    test("Then it should return client", async () => {
      const expectedClientId = "1";
      const expectedClientName = "Client 1";
      const expectedClient = mockClientApiRaw;
      const expectedClientUpdate = { ...expectedClient, contactName: expectedClientName };
      const {
        result: { current },
      } = renderHook(() => useApi());

      axios.put = jest.fn().mockReturnValue({
        data: expectedClientUpdate,
      });
      const response = await current.updateClient(+expectedClientId, expectedClient);

      expect(response).toEqual(expectedClientUpdate);
    });

    test("Then it should return without client", async () => {
      const expectedClientId = "1";
      const expectedClient = mockClientApiRaw;
      const {
        result: { current },
      } = renderHook(() => useApi());

      axios.put = jest.fn().mockRejectedValue(null);
      const response = await current.updateClient(+expectedClientId, expectedClient);

      expect(response).toEqual(null);
    });
  });
});
