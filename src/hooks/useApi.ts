import type { Clients, ClientsApiRaw } from "@/types/clientTypes";
import axios from "axios";

interface GetClientsProps {
  pageNumber?: number;
  pageSize?: number;
  historic?: boolean;
  sortBy?: "id";
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const useApi = (token: string) => {
  const getClients = async ({
    pageNumber = 0,
    pageSize = 10,
    historic = false,
    sortBy = "id",
  }: GetClientsProps): Promise<ClientsApiRaw | null> => {
    try {
      const response = await axios.get<ClientsApiRaw>(
        `${apiUrl}/customers?pageNumber=${pageNumber}&pageSize=${pageSize}&historic=${historic}&sortBy=${sortBy}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const responseData = response.data;

      return responseData;
    } catch {
      return null;
    }
  };

  return { getClients };
};

export default useApi;
