import React, { InputHTMLAttributes } from "react";
import { InputContainer, StyledInput } from "./styled";
interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

export const InputComponent = ({
  placeholder,
  label,
  type,
  icon,
  ...props
}: IInput) => {
  return (
    <div>
      {label && <label htmlFor="">{label}</label>}
      <InputContainer>
        {icon && icon}
        <StyledInput placeholder={placeholder} type={type} {...props} />
      </InputContainer>
    </div>
  );
};
