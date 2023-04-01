import ClientForm from "@/components/ClientForm/ClientForm";
import useApi from "@/hooks/useApi";
import { loadClientActionCreator } from "@/redux/features/clientSlice/clientSlice";
import { showLoadingActionCreator, hideLoadingActionCreator } from "@/redux/features/uiSlice/uiSlice";
import { wrapper } from "@/redux/store";
import ClientFormPageStyled from "@/styles/pages/ClientFormPageStyled";
import { GetServerSideProps } from "next/types";
import { useAppSelector } from "@/redux/hooks";
import { parseClient } from "@/utils/parseClient";

const ClientPage = (): JSX.Element => {
  const client = useAppSelector((state) => state.client.client);

  return (
    <ClientFormPageStyled>
      <h2>Client {client.id}</h2>
      <ClientForm client={client} />
    </ClientFormPageStyled>
  );
};

export default ClientPage;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const { id } = ctx.query as {
    id: string;
  };

  const { getClient } = useApi();
  store.dispatch(showLoadingActionCreator());
  const response = await getClient(id);
  if (response) store.dispatch(loadClientActionCreator(parseClient(response)));
  store.dispatch(hideLoadingActionCreator());

  return {
    props: {},
  };
});
