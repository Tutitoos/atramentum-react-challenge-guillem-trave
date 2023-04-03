import type { Client } from "@/types/clientTypes";
import ClientDetailsStyled from "./ClientDetailsStyled";

interface ClientDetailsProps {
  client: Client | null;
}

const ClientDetails: React.FC<ClientDetailsProps> = ({ client }): JSX.Element => {
  return (
    <ClientDetailsStyled isClient={!!client}>
      <div className="card-head">
        <h2 className="card-head__title">Client information:</h2>
      </div>
      <div className="card-body">
        {!client && <span>There is no information</span>}
        {client && (
          <>
            <div>
              <h3>ID:</h3> <span data-testid="clientId">{client.id}</span>
            </div>
            <div>
              <h3>Name:</h3> <span data-testid="clientName">{client.contactName}</span>
            </div>
            <div>
              <h3>Email:</h3> <span data-testid="clientEmail">{client.email}</span>
            </div>
            <div>
              <h3>Phone:</h3>{" "}
              {client.phones.map((phone) => {
                const position = client.phones.indexOf(phone);
                return (
                  <span key={position} data-testid={`clientPhone${position + 1}`}>
                    {phone}
                  </span>
                );
              })}
            </div>
            <div>
              <h3>Bank Account:</h3>
              <span data-testid="clientBankAccountId">{client.bankAccountId}</span>
            </div>
            <div>
              <h3>Sector:</h3> <span data-testid="clientSectorId">{client.sectorId}</span>
            </div>
            <div>
              <h3>Category:</h3> <span data-testid="clientCategoryId">{client.categoryId}</span>
            </div>
            <div>
              <h3>Actived:</h3> <span data-testid="clientActived">{client.actived ? "Yes" : "No"}</span>
            </div>
            <div>
              <h3>Deleted:</h3> <span data-testid="clientDeleted">{client.deleted ? "Yes" : "No"}</span>
            </div>
            <div>
              <h3>Observations:</h3> <p data-testid="clientObservations">{client.observations}</p>
            </div>
          </>
        )}
      </div>
    </ClientDetailsStyled>
  );
};

export default ClientDetails;
