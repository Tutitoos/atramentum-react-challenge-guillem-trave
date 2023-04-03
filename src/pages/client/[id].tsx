import ClientForm from "@/components/ClientForm/ClientForm";
import useApi from "@/hooks/useApi";
import { loadClientActionCreator } from "@/redux/features/clientSlice/clientSlice";
import { showLoadingActionCreator, hideLoadingActionCreator } from "@/redux/features/uiSlice/uiSlice";
import { wrapper } from "@/redux/store";
import ClientFormPageStyled from "@/styles/pages/ClientFormPageStyled";
import { GetServerSideProps } from "next/types";
import { useAppSelector } from "@/redux/hooks";
import { parseClient } from "@/utils/parseClient";

const ClientFormPage = (): JSX.Element => {
  const client = useAppSelector((state) => state.client.client);

  return (
    <ClientFormPageStyled>
      <h2>Client {client?.id}</h2>
      {client && <ClientForm client={client} />}
    </ClientFormPageStyled>
  );
};

export default ClientFormPage;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const { getClient } = useApi();

  const { id } = ctx.query as {
    id: string;
  };

  store.dispatch(showLoadingActionCreator());

  const response = await getClient(id);
  if (!response) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  const client = parseClient(response);
  store.dispatch(loadClientActionCreator(client));

  store.dispatch(hideLoadingActionCreator());

  return {
    props: {},
  };
});
