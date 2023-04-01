import FieldStyled from "./FieldStyled";

type FieldGeneric =
  | {
      type: "TEXT" | "EMAIL" | "PASSWORD" | "TEL" | "CHECKBOX";
      onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
      styles?: {
        className?: string;
      };
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
}

const Field: React.FC<FieldProps> = ({
  field,
  label,
  name,
  placeholder,
  required = false,
  autoComplete = "off",
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
            />
          )}
        </>
      )}
    </FieldStyled>
  );
};

export default Field;
