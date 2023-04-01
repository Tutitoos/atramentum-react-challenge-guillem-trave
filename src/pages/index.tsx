import ClientDetails from "@/components/ClientDetails/ClientDetails";
import TableClients from "@/components/TableClients/TableClients";
import useApi from "@/hooks/useApi";
import { loadClientsActionCreator } from "@/redux/features/clientSlice/clientSlice";
import { hideLoadingActionCreator, showLoadingActionCreator } from "@/redux/features/uiSlice/uiSlice";
import { useAppSelector } from "@/redux/hooks";
import { wrapper } from "@/redux/store";
import HomePageStyled from "@/styles/pages/HomePageStyled";
import { parseClients } from "@/utils/parseClient";
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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const { getClients } = useApi();

  store.dispatch(showLoadingActionCreator());
  const response = await getClients({});
  if (response) store.dispatch(loadClientsActionCreator(parseClients(response.content)));
  store.dispatch(hideLoadingActionCreator());

  return {
    props: {},
  };
});
