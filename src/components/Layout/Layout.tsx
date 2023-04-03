import Head from "next/head";
import { PropsWithChildren, useEffect } from "react";
import Header from "../Header/Header";
import LayoutStyled from "./LayoutStyled";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Loader from "../Loader/Loader";
import { useRouter } from "next/router";
import { hideLoadingActionCreator, showLoadingActionCreator } from "@/redux/features/uiSlice/uiSlice";

const Layout: React.FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.ui);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      dispatch(showLoadingActionCreator());
    };
    const handleStop = () => {
      dispatch(hideLoadingActionCreator());
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [dispatch, router]);

  return (
    <LayoutStyled>
      <Head>
        <title>Atramentum</title>
        <meta name="description" content="Technical test for Atramentum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header />
      <main>
        {isLoading && <Loader />}
        {!isLoading && children}
      </main>
    </LayoutStyled>
  );
};

export default Layout;
