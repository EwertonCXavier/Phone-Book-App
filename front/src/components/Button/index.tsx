import React, { ButtonHTMLAttributes, useMemo } from "react";
import { Button } from "./styled";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  description?: string;
  icon?: React.ReactNode;
  // variant?: "standard" | "icon";
}

export const ButtonComponent = ({ icon, description, ...props }: IButton) => {
  const customButton = useMemo(() => {
    switch (description) {
      case undefined:
        return {
          color: "#fff",
          background: "red",
          padding: "0.5rem",
        };
      default:
        return {
          color: "#fff",
          background: "#347bf6",
          padding: "0.5rem 1.25rem",
        };
    }
  }, [description]);
  return (
    <Button variant={customButton} {...props}>
      {icon && icon}
      {description && <span>{description}</span>}
    </Button>
  );
};
