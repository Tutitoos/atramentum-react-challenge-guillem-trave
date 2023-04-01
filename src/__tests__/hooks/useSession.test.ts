import useSession from "@/hooks/useSession";
import { mockSession, mockSessionToken } from "@/__mocks__/mockSession";
import { renderHook } from "@testing-library/react";
import axios from "axios";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a useSession hook", () => {
  describe("When it's function getSession is called", () => {
    test("Then it should return session", async () => {
      const {
        result: { current },
      } = renderHook(() => useSession());

      axios.post = jest.fn().mockReturnValue({
        data: mockSession,
      });
      const response = await current.getSession();

      expect(response).toEqual(mockSession);
    });

    test("Then it should return without session", async () => {
      const {
        result: { current },
      } = renderHook(() => useSession());

      axios.post = jest.fn().mockRejectedValue(null);
      const response = await current.getSession();

      expect(response).toEqual(null);
    });
  });

  describe("When it's function getToken is called", () => {
    test("Then it should return token", async () => {
      const {
        result: { current },
      } = renderHook(() => useSession());

      axios.post = jest.fn().mockReturnValue({
        data: mockSession,
      });
      const response = await current.getToken();

      expect(response).toEqual(mockSessionToken);
    });

    test("Then it should return without token", async () => {
      const {
        result: { current },
      } = renderHook(() => useSession());

      axios.post = jest.fn().mockRejectedValue(null);
      const response = await current.getToken();

      expect(response).toEqual(null);
    });
  });
});
