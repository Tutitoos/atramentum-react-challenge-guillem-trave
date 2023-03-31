import type { Session } from "@/types/clientTypes";
import axios from "axios";

const webUrl = process.env.NEXT_PUBLIC_WEB_URL;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const adminUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

const useSession = () => {
  const getSession = async (): Promise<Session | null> => {
    try {
      const response = await axios.post<Session>(
        `${apiUrl}/authenticate`,
        {
          username: adminUsername,
          password: adminPassword,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const responseData = response.data;

      return responseData;
    } catch {
      return null;
    }
  };

  const getToken = async (): Promise<string | null> => {
    try {
      const response = await axios.get<string>(`${webUrl}/api/session`);
      const responseData = response.data;

      return responseData;
    } catch {
      return null;
    }
  };

  const setToken = async (token: string): Promise<string | null> => {
    try {
      const response = await axios.post<string>(`${webUrl}/api/session`, {
        sessionToken: token,
      });
      const responseData = response.data;

      return responseData;
    } catch {
      return null;
    }
  };

  return { getSession, getToken, setToken };
};

export default useSession;
