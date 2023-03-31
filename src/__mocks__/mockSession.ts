import { Session } from "@/types/clientTypes";

export const mockSession: Session = {
  message: "Hello admin",
  user: {
    password: null,
    username: "admin",
    authorities: [],
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true,
    enabled: true,
    customerIds: [],
  },
  token: "1234",
};

export const mockSessionToken = "1234";
