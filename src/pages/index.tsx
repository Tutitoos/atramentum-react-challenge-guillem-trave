import ClientDetails from "@/components/ClientDetails/ClientDetails";
import TableClients from "@/components/TableClients/TableClients";
import useApi from "@/hooks/useApi";
import useSession from "@/hooks/useSession";
import { loadClientsActionCreator } from "@/redux/features/clientSlice/clientSlice";
import { hideLoadingActionCreator, showLoadingActionCreator } from "@/redux/features/uiSlice/uiSlice";
import { useAppSelector } from "@/redux/hooks";
import { wrapper } from "@/redux/store";
import HomePageStyled from "@/styles/pages/HomePageStyled";
import { GetServerSideProps } from "next/types";

const HomePage = (): JSX.Element => {
  const { client, clients } = useAppSelector((state) => state.client);

  return (
    <HomePageStyled>
      <div>
        <TableClients clients={clients} />
        <ClientDetails client={client} />
      </div>
    </HomePageStyled>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const { getSession, getToken, setToken } = useSession();

  let token = await getToken();
  if (!token) {
    const session = await getSession();
    if (session) {
      token = await setToken(session.token);
    }
  }

  if (token) {
    const { getClients } = useApi(token);
    store.dispatch(showLoadingActionCreator());
    const response = await getClients({});
    if (response) store.dispatch(loadClientsActionCreator(response));
    store.dispatch(hideLoadingActionCreator());
  }

  return {
    props: {},
  };
});
