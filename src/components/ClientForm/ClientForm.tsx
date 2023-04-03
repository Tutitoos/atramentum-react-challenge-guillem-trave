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
        preferredCompanyBankAccountId: formData.bankAccountId,
        customerCategoryId: formData.categoryId,
        sectorId: formData.sectorId,
        deleted: formData.deleted,
        activated: formData.actived,
        observations: formData.observations,
      };

      const response = await updateClient(client.id, newClient);
      if (response) router.push("/");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { type, name, value } = event.target;

    let newFormData: Client = { ...formData, phones: [...formData.phones] };

    if (type === "tel") {
      if (name === "phonePrimary") newFormData.phones[0] = value;
      if (name === "phoneSecondary") newFormData.phones[1] = value;
    }

    if (["text", "textarea", "email"].includes(type)) {
      if (name === "name") newFormData.contactName = value;
      if (name === "email") newFormData.email = value;
      if (name === "observations") newFormData.observations = value;
    }

    if (type === "number") {
      const { valueAsNumber } = event.target as unknown as HTMLInputElement;

      if (name === "bankAccount") newFormData.bankAccountId = valueAsNumber;
      if (name === "sector") newFormData.sectorId = valueAsNumber;
      if (name === "category") newFormData.categoryId = valueAsNumber;
    }

    if (type === "checkbox") {
      const { checked } = event.target as unknown as HTMLInputElement;

      if (name === "deleted") newFormData.deleted = checked;
      if (name === "actived") newFormData.actived = checked;
    }

    setFormData({ ...newFormData });
  };

  return (
    <ClientFormStyled className="form" onSubmit={handleSubmit}>
      <div className="form-fields">
        <Field
          field={{
            type: "TEXT",
            onChange: handleChange,
          }}
          label="Name"
          name="name"
          required={true}
          value={formData.contactName}
        />
        <Field
          field={{
            type: "EMAIL",
            onChange: handleChange,
          }}
          label="Email"
          name="email"
          required={true}
          value={formData.email}
        />
        <Field
          field={{
            type: "TEL",
            onChange: handleChange,
          }}
          label="Phone (Primary)"
          name="phonePrimary"
          required={true}
          value={formData.phones[0]}
        />
        <Field
          field={{
            type: "TEL",
            onChange: handleChange,
          }}
          label="Phone (Secondary)"
          name="phoneSecondary"
          value={formData.phones[1]}
        />
        <Field
          field={{
            type: "NUMBER",
            onChange: handleChange,
          }}
          label="Bank Account"
          name="bankAccount"
          value={`${formData.bankAccountId}`}
        />
        <Field
          field={{
            type: "NUMBER",
            onChange: handleChange,
          }}
          label="Sector"
          name="sector"
          value={`${formData.sectorId}`}
        />
        <Field
          field={{
            type: "NUMBER",
            onChange: handleChange,
          }}
          label="Category"
          name="category"
          value={`${formData.categoryId}`}
        />
        <Field
          field={{
            type: "CHECKBOX",
            checked: formData.actived,
            onChange: handleChange,
          }}
          label="Actived"
          name="actived"
        />
        <Field
          field={{
            type: "CHECKBOX",
            checked: formData.deleted,
            onChange: handleChange,
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
            onChange: handleChange,
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
