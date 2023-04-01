import FieldStyled from "./FieldStyled";

type FieldGeneric =
  | {
      type: "TEXT" | "EMAIL" | "PASSWORD" | "TEL";
      onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
      styles?: {
        className?: string;
      };
    }
  | {
      type: "CHECKBOX";
      onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
      styles?: {
        className?: string;
      };
      checked?: boolean;
    }
  | {
      type: "TEXTAREA";
      onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
      styles: {
        className?: string;
        rows: number;
        cols: number;
      };
    }
  | {
      type: "NUMBER";
      onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
      styles?: {
        className?: string;
      };
      min?: number;
      max?: number;
    };

export interface FieldProps {
  field: FieldGeneric;
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: "off" | "on";
  value?: string;
}

const Field: React.FC<FieldProps> = ({
  field,
  label,
  name,
  placeholder,
  required = false,
  autoComplete = "off",
  value = "",
}): JSX.Element => {
  return (
    <FieldStyled className="field" fieldType={field.type}>
      <span className="field__text">{label}</span>
      {field.type === "TEXTAREA" && (
        <textarea
          onChange={field.onChange}
          placeholder={placeholder}
          className={`field__box ${field.styles?.className}`}
          rows={field.styles.rows}
          cols={field.styles.cols}
          name={name}
          aria-label={name}
          autoComplete={autoComplete}
          required={required}
          defaultValue={value}
        />
      )}
      {field.type !== "TEXTAREA" && (
        <>
          {["TEXT", "EMAIL", "PASSWORD", "TEL", "CHECKBOX"].includes(field.type) && (
            <input
              onChange={field.onChange}
              placeholder={placeholder}
              className={`field__box ${field.styles?.className}`}
              type={field.type.toLowerCase()}
              name={name}
              aria-label={name}
              autoComplete={autoComplete}
              required={required}
              defaultValue={value}
              defaultChecked={field.type === "CHECKBOX" ? field?.checked : false}
            />
          )}
          {field.type === "NUMBER" && (
            <input
              onChange={field.onChange}
              placeholder={placeholder}
              className={`field__box ${field.styles?.className}`}
              type={field.type.toLowerCase()}
              name={name}
              aria-label={name}
              autoComplete={autoComplete}
              required={required}
              min={field.min}
              max={field.max}
              defaultValue={value}
            />
          )}
        </>
      )}
    </FieldStyled>
  );
};

export default Field;
