import ClientForm from "@/components/ClientForm/ClientForm";
import ClientFormPageStyled from "@/styles/pages/ClientFormPageStyled";
import { useRouter } from "next/router";

const ClientPage = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <ClientFormPageStyled>
      <h2>Client {id}</h2>
      <ClientForm />
    </ClientFormPageStyled>
  );
};

export default ClientPage;
