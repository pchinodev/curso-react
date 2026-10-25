import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

// Button component that renders a button element with the provided title and type. It also accepts additional props to customize the button's behavior and appearance.

const Button = ({ title, type = "button", ...props }: IButtonProps) => {
  return (
    <ButtonContainer type={type} {...props}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
