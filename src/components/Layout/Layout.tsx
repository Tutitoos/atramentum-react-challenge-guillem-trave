import useSession from "@/hooks/useSession";
import Head from "next/head";
import { PropsWithChildren, useEffect } from "react";
import Header from "../Header/Header";
import LayoutStyled from "./LayoutStyled";

const Layout: React.FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const { getSession, getToken, setToken } = useSession();

  useEffect(() => {
    (async () => {
      const token = await getToken();
      if (!token) {
        const session = await getSession();
        if (session) setToken(session.token);
      }
    })();
  }, [getSession, getToken, setToken]);

  return (
    <LayoutStyled>
      <Head>
        <title>Atramentum</title>
        <meta name="description" content="Technical test for Atramentum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header />
      <main>{children}</main>
    </LayoutStyled>
  );
};

export default Layout;
