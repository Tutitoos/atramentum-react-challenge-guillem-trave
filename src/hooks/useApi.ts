import type { ClientsApiRaw, ClientApi } from "@/types/clientTypes";
import axios from "axios";
import useSession from "./useSession";

interface GetClientsProps {
  pageNumber?: number;
  pageSize?: number;
  historic?: boolean;
  sortBy?: "id";
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const useApi = () => {
  const { getToken } = useSession();

  const getClients = async ({
    pageNumber = 0,
    pageSize = 10,
    historic = false,
    sortBy = "id",
  }: GetClientsProps): Promise<ClientsApiRaw | null> => {
    const token = await getToken();

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

  const getClient = async (id: string): Promise<ClientApi | null> => {
    const token = await getToken();

    try {
      const response = await axios.get<ClientApi>(`${apiUrl}/customers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responseData = response.data;

      return responseData;
    } catch {
      return null;
    }
  };

  const updateClient = async (id: number, client: ClientApi): Promise<ClientApi | null> => {
    const token = await getToken();

    try {
      const response = await axios.put<ClientApi>(`${apiUrl}/customers/${id}`, client, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responseData = response.data;

      return responseData;
    } catch {
      return null;
    }
  };

  return { getClients, getClient, updateClient };
};

export default useApi;
