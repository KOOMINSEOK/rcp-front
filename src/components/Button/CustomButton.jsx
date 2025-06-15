import { StyledButton } from "./styled/styled";

export default function CustomButton({ children, onClick, ...props }) {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
}
