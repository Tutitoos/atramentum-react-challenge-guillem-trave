import ClientDetails from "@/components/ClientDetails/ClientDetails";
import TableClients from "@/components/TableClients/TableClients";
import HomePageStyled from "@/styles/pages/HomePageStyled";
import { mockClient, mockClients } from "@/__mocks__/mockClients";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <TableClients clients={mockClients} />
      <ClientDetails client={mockClient} />
    </HomePageStyled>
  );
};

export default HomePage;
