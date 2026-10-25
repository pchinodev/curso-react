import { InputContainer, ErrorMessage } from "./styles";
import { IInputProps } from "././types";
import { Controller } from "react-hook-form";

const Input = ({
  control,
  name,
  errorMessage,
  onChange,
  ...rest
}: IInputProps) => {
  return (
    <>
      <InputContainer>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <input
              {...rest}
              id={name}
              name={name}
              aria-invalid={Boolean(errorMessage)}
              aria-describedby={errorMessage ? `${name}-error` : undefined}
              onChange={(event) => {
                field.onChange(event);
                onChange?.(event);
              }}
              onBlur={field.onBlur}
              value={field.value}
              ref={field.ref}
            />
          )}
        />
      </InputContainer>
      {errorMessage ? (
        <ErrorMessage id={`${name}-error`} role="alert">
          {errorMessage}
        </ErrorMessage>
      ) : null}
    </>
  );
};

export default Input;
