import { Title } from "./styled";

interface ILabelComponent {
  description: string;
  variant?: "standard" | "small";
  color?: "standard" | "grey";
}

export const LabelComponent = ({
  description,
  variant = "standard",
  color = "standard",
}: ILabelComponent) => {
  return (
    <Title variant={variant} color={color}>
      {description}
    </Title>
  );
};
