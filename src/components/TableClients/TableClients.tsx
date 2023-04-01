import { loadClientActionCreator } from "@/redux/features/clientSlice/clientSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { Client, Clients } from "@/types/clientTypes";
import Image from "next/image";
import { useRouter } from "next/router";
import TableClientsStyled from "./TableClientsStyled";

interface TableClientsProps {
  clients: Clients;
}

const TableClients: React.FC<TableClientsProps> = ({ clients }): JSX.Element => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClientSelect = (client: Client) => {
    dispatch(loadClientActionCreator(client));
  };

  const handleClientEdit = (id: number) => {
    router.push(`/client/${id}`);
  };

  return (
    <TableClientsStyled className="table">
      <thead className="titles">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Sector</th>
          <th>Category</th>
          <th>Deleted</th>
          <th>Actived</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="data">
        {clients.map((client) => (
          <tr key={clients.indexOf(client)} onClick={() => handleClientSelect(client)}>
            <td>{client.id}</td>
            <td>{client.contactName}</td>
            <td>{client.email}</td>
            <td>{client.sector.id}</td>
            <td>{client.category.id}</td>
            <td>{client.deleted ? "Yes" : "No"}</td>
            <td>{client.actived ? "Yes" : "No"}</td>
            <td>
              <Image src="/edit_pencil.svg" alt="Edit icon" width={24} height={24} onClick={() => handleClientEdit(client.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </TableClientsStyled>
  );
};

export default TableClients;
