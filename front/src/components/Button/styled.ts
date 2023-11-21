import { styled } from "styled-components";

interface IButton {
  variant: {
    color: string;
    background: string;
    padding: string;
  };
}

export const Button = styled("button")<IButton>`
  font-size: 1rem;
  color: ${(props) => props.variant.color};
  background-color: ${(props) => props.variant.background};
  padding: ${(props) => props.variant.padding};
  border-radius: 0.25rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
