import useApi from "@/hooks/useApi";
import { Client, ClientApi } from "@/types/clientTypes";
import { useRouter } from "next/router";
import { useState } from "react";
import Field from "../Field/Field";
import ClientFormStyled from "./ClientFormStyled";

const ClientForm: React.FC<{
  client: Client;
}> = ({ client }): JSX.Element => {
  const { updateClient, getClient } = useApi();
  const router = useRouter();

  const [formData, setFormData] = useState<Client>(client);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const oldClient = await getClient(String(client.id));
    if (oldClient) {
      const newClient: ClientApi = {
        ...oldClient,
        contactName: formData.contactName,
        email: formData.email,
        phone1: formData.phones[0],
        phone2: formData.phones[1],
        preferredCompanyBankAccountId: formData.bankAccount.id,
        customerCategoryId: formData.category.id,
        sectorId: formData.sector.id,
        deleted: formData.deleted,
        activated: formData.actived,
        observations: formData.observations,
      };

      const response = await updateClient(client.id, newClient);
      if (response) router.push("/");
    }
  };

  return (
    <ClientFormStyled className="form" onSubmit={handleSubmit}>
      <div className="form-fields">
        <Field
          field={{
            type: "TEXT",
            onChange: ({ target }) => setFormData({ ...formData, contactName: target.value }),
          }}
          label="Name"
          name="name"
          required={true}
          value={formData.contactName}
        />
        <Field
          field={{
            type: "EMAIL",
            onChange: ({ target }) => setFormData({ ...formData, email: target.value }),
          }}
          label="Email"
          name="email"
          required={true}
          value={formData.email}
        />
        <Field
          field={{
            type: "TEL",
            onChange: ({ target }) => {
              formData.phones[0] = target.value;
              setFormData({ ...formData });
            },
          }}
          label="Phone (Primary)"
          name="phonePrimary"
          required={true}
          value={formData.phones[0]}
        />
        <Field
          field={{
            type: "TEL",
            onChange: ({ target }) => {
              formData.phones[1] = target.value;
              setFormData({ ...formData });
            },
          }}
          label="Phone (Secondary)"
          name="phoneSecondary"
          value={formData.phones[1]}
        />
        <Field
          field={{
            type: "NUMBER",
            onChange: ({ target }) =>
              setFormData({
                ...formData,
                bankAccount: {
                  ...formData.bankAccount,
                  id: target.valueAsNumber,
                },
              }),
          }}
          label="Bank Account"
          name="bankAccount"
          value={`${formData.bankAccount.id}`}
        />
        <Field
          field={{
            type: "NUMBER",
            onChange: ({ target }) =>
              setFormData({
                ...formData,
                sector: {
                  ...formData.sector,
                  id: target.valueAsNumber,
                },
              }),
          }}
          label="Sector"
          name="sector"
          value={`${formData.sector.id}`}
        />
        <Field
          field={{
            type: "NUMBER",
            onChange: ({ target }) =>
              setFormData({
                ...formData,
                category: {
                  ...formData.category,
                  id: target.valueAsNumber,
                },
              }),
          }}
          label="Category"
          name="category"
          value={`${formData.category.id}`}
        />
        <Field
          field={{
            type: "CHECKBOX",
            checked: formData.actived,
            onChange: ({ target }) => setFormData({ ...formData, actived: target.checked }),
          }}
          label="Actived"
          name="actived"
        />
        <Field
          field={{
            type: "CHECKBOX",
            checked: formData.deleted,
            onChange: ({ target }) => setFormData({ ...formData, deleted: target.checked }),
          }}
          label="Deleted"
          name="deleted"
        />
        <Field
          field={{
            type: "TEXTAREA",
            styles: {
              cols: 300,
              rows: 300,
            },
            onChange: ({ target }) => setFormData({ ...client, observations: target.value }),
          }}
          label="Observations"
          name="observations"
          required={true}
          value={formData.observations}
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="form-actions__button">
          Save
        </button>
      </div>
    </ClientFormStyled>
  );
};

export default ClientForm;
