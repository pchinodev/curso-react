import type { ReactNode } from 'react'
import { Controller } from 'react-hook-form'
import type { Control, FieldValues, Path } from 'react-hook-form'
import { InputWrapper, InputContainer, ErrorMessage } from './styles'

interface InputProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  placeholder?: string
  type?: string
  leftIcon?: ReactNode
  errorMessage?: string
}

export function Input<T extends FieldValues>({
  name,
  control,
  placeholder,
  type = 'text',
  leftIcon,
  errorMessage,
}: InputProps<T>) {
  return (
    <InputWrapper>
      <InputContainer>
        {leftIcon}
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input {...field} type={type} placeholder={placeholder} />
          )}
        />
      </InputContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputWrapper>
  )
}
