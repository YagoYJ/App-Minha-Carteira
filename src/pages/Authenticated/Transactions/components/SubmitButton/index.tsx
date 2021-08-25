import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonText, Container } from "./styles";

interface SubmitButtonProps extends TouchableOpacityProps {
  text: string;
}

export default function SubmitButton({ text, ...rest }: SubmitButtonProps) {
  return (
    <Container {...rest}>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
}
