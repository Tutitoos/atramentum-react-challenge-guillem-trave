import type { Session } from "@/types/clientTypes";
import axios from "axios";

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
    const response = await getSession();
    if (!response) return null;

    return response.token;
  };

  return { getSession, getToken };
};

export default useSession;
