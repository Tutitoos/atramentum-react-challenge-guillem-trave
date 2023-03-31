import type { Client } from "@/types/clientTypes";
import ClientDetailsStyled from "./ClientDetailsStyled";

interface ClientDetailsProps {
  client: Client;
}

const ClientDetails: React.FC<ClientDetailsProps> = ({ client }): JSX.Element => {
  return (
    <ClientDetailsStyled>
      <div className="card-head">
        <h2 className="card-head__title">Client information:</h2>
      </div>
      <div className="card-body">
        <div>
          <h3>ID:</h3> <span>{client.id}</span>
        </div>
        <div>
          <h3>Name:</h3> <span>{client.contactName}</span>
        </div>
        <div>
          <h3>Email:</h3> <span>{client.email}</span>
        </div>
        <div>
          <h3>Phone:</h3>{" "}
          {client.phones.map((phone, index) => (
            <span key={index}>{phone}</span>
          ))}
        </div>
        <div>
          <h3>Bank Account:</h3>
          <span>
            {client.bankAccount.id} - {client.bankAccount.name}
          </span>
        </div>
        <div>
          <h3>Sector:</h3>{" "}
          <span>
            {client.sector.id} - {client.sector.name}
          </span>
        </div>
        <div>
          <h3>Category:</h3>{" "}
          <span>
            {client.category.id} - {client.category.name}
          </span>
        </div>
        <div>
          <h3>Actived:</h3> <span>{client.actived ? "Yes" : "No"}</span>
        </div>
        <div>
          <h3>Deleted:</h3> <span>{client.deleted ? "Yes" : "No"}</span>
        </div>
        <div>
          <h3>Observations:</h3> <p>{client.observations}</p>
        </div>
      </div>
    </ClientDetailsStyled>
  );
};

export default ClientDetails;
