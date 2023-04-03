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
    const { valueAsNumber, checked } = event.target as HTMLInputElement;
    const newFormData: Client = { ...formData, phones: [...formData.phones] };

    switch (type) {
      case "tel": {
        if (["phonePrimary", "phoneSecondary"].includes(name)) {
          newFormData.phones[name === "phonePrimary" ? 0 : 1] = value;
        }
        break;
      }

      case "text":
      case "textarea":
      case "email": {
        switch (name) {
          case "name":
            newFormData.contactName = value;
            break;
          case "email":
            newFormData.email = value;
            break;
          case "observations":
            newFormData.observations = value;
            break;
          default:
            break;
        }
        break;
      }

      case "number": {
        switch (name) {
          case "bankAccount":
            newFormData.bankAccountId = valueAsNumber;
            break;
          case "sector":
            newFormData.sectorId = valueAsNumber;
            break;
          case "category":
            newFormData.categoryId = valueAsNumber;
            break;
          default:
            break;
        }
        break;
      }

      case "checkbox": {
        switch (name) {
          case "deleted":
            newFormData.deleted = checked;
            break;
          case "actived":
            newFormData.actived = checked;
            break;
          default:
            break;
        }
        break;
      }

      default: {
        break;
      }
    }

    setFormData(newFormData);
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
