import TableClients from "@/components/TableClients/TableClients";
import { mockClients } from "@/__mocks__/mockClients";

export default function Home() {
  return (
    <section
      style={{
        textAlign: "center",
      }}
    >
      List of customers
      <TableClients clients={mockClients} />
    </section>
  );
}
