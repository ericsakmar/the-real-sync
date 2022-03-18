import { useFormContext } from "react-hook-form";

function TextField({ name, type = "text", label, disabled = false }) {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        type={type}
        disabled={disabled}
        {...register(name, { required: true })}
      />

      {errors[name] && <div className="required">Required</div>}
    </div>
  );
}

export default TextField;
