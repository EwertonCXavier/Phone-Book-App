import { IContactForm } from "@/utils";
import React, { InputHTMLAttributes } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InputContainer, StyledInput } from "./styled";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register: UseFormRegister<IContactForm>;
  name: keyof IContactForm;
  errors: FieldErrors<IContactForm>[keyof IContactForm];
  icon?: React.ReactNode;
}

export const UncontrolledInput = ({
  label,
  placeholder,
  type,
  register,
  errors,
  icon,
  name,
  ...props
}: IInput) => {
  return (
    <div>
      <div className="flex gap-1">
        {label && <label htmlFor={name}>{label}</label>}
        {errors?.message && (
          <span className="text-red-400">{errors?.message}</span>
        )}
      </div>
      <InputContainer isIconPresent={!!icon}>
        {icon && icon}
        <StyledInput
          isIconPresent={!!icon}
          id={name}
          placeholder={placeholder}
          type={type}
          {...props}
          {...register(name)}
        />
      </InputContainer>
    </div>
  );
};
