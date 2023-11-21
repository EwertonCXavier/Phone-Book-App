import { styled } from "styled-components";

interface ITitle {
  variant: "standard" | "small";
  color: "standard" | "grey";
}

export const Title = styled.span<ITitle>`
  font-size: ${(props) =>
    props.variant === "standard" ? "1.25rem" : "0.875rem"};
  color: ${(props) => (props.variant === "standard" ? "#000" : "#A7A7A6")};
  font-weight: bold;
`;
