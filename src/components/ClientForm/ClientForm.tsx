import Field from "../Field/Field";
import ClientFormStyled from "./ClientFormStyled";

const ClientForm = (): JSX.Element => {
  return (
    <ClientFormStyled className="form">
      <div className="form-fields">
        <Field
          field={{
            type: "TEXT",
          }}
          label="Name"
          name="name"
          required={true}
        />
        <Field
          field={{
            type: "EMAIL",
          }}
          label="Email"
          name="email"
          required={true}
        />
        <Field
          field={{
            type: "TEL",
          }}
          label="Phone (Primary)"
          name="phonePrimary"
          required={true}
        />
        <Field
          field={{
            type: "TEL",
          }}
          label="Phone (Secondary)"
          name="phoneSecondary"
          required={false}
        />
        <Field
          field={{
            type: "NUMBER",
          }}
          label="Bank Account"
          name="bankAccount"
          required={true}
        />
        <Field
          field={{
            type: "NUMBER",
          }}
          label="Sector"
          name="sector"
          required={true}
        />
        <Field
          field={{
            type: "NUMBER",
          }}
          label="Category"
          name="category"
          required={true}
        />
        <Field
          field={{
            type: "CHECKBOX",
          }}
          label="Actived"
          name="actived"
          required={true}
        />
        <Field
          field={{
            type: "CHECKBOX",
          }}
          label="Deleted"
          name="deleted"
          required={true}
        />
        <Field
          field={{
            type: "TEXTAREA",
            styles: {
              cols: 300,
              rows: 300,
            },
          }}
          label="Observations"
          name="observations"
          required={true}
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
