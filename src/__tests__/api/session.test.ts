import { mockSessionToken } from "@/__mocks__/mockSession";
import { NextApiRequest, NextApiResponse } from "next";
import handleApi from "../../pages/api/session";

let mockRequest: Partial<NextApiRequest> = {
  method: "GET",
};

const mockResponse: Partial<NextApiResponse> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn().mockReturnThis(),
  setHeader: jest.fn().mockReturnThis(),
};

describe("Given a session api", () => {
  describe("When it's function handleApi is called", () => {
    test("should return session token when GET request contains a session token cookie", () => {
      mockRequest.cookies = {
        session_token: mockSessionToken,
      };

      handleApi(mockRequest as NextApiRequest, mockResponse as NextApiResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockSessionToken);
    });

    test("should return 401 when GET request does not contain a session token cookie", () => {
      mockRequest.cookies = {};

      const expectedResponseJson = {
        message: "No session token",
      };

      handleApi(mockRequest as NextApiRequest, mockResponse as NextApiResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(401);
      expect(mockResponse.json).toHaveBeenCalledWith(expectedResponseJson);
    });

    test("should return session token when POST request includes a session token in the body and sets it as a cookie", () => {
      mockRequest.method = "POST";
      mockRequest.body = {
        sessionToken: mockSessionToken,
      };

      handleApi(mockRequest as NextApiRequest, mockResponse as NextApiResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockSessionToken);
    });

    test("should return 401 when POST request does not contain a session token cookie", () => {
      mockRequest.method = "POST";
      mockRequest.body = {
        sessionToken: undefined,
      };

      const expectedResponseJson = {
        message: "No session token",
      };

      handleApi(mockRequest as NextApiRequest, mockResponse as NextApiResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(401);
      expect(mockResponse.json).toHaveBeenCalledWith(expectedResponseJson);
    });

    test("should return 405 when unknown method is called", () => {
      const expectedResponseJson = "unknown";

      mockRequest.method = expectedResponseJson;

      handleApi(mockRequest as NextApiRequest, mockResponse as NextApiResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(405);
      expect(mockResponse.json).toHaveBeenCalledWith(expectedResponseJson);
    });
  });
});
