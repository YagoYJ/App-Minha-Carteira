import React, { useState } from "react";
import { Masks } from "react-native-mask-input";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import SubmitButton from "../components/SubmitButton";
import { ButtonContainer, Container, Input, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function TransactionValue() {
  const [value, setValue] = useState("");

  const navigation = useNavigation();

  function handleSubmit() {
    const numberValue = Number(value) / 100;

    if (numberValue > 0) {
      return navigation.navigate("TransactionInfo", { value: numberValue });
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Title>Valor da Transação</Title>

        <Input
          mask={Masks.BRL_CURRENCY}
          value={value}
          onChangeText={(masked, unmasked, obfuscated) => {
            setValue(unmasked);
          }}
          maxLength={20}
          keyboardType="number-pad"
          multiline
          autoFocus
        />

        <ButtonContainer style={{ backgroundColor: "white", marginTop: 12 }}>
          <SubmitButton
            text="Continuar"
            onPress={handleSubmit}
            disabled={value.length <= 0}
            style={{ opacity: value.length <= 0 ? 0.5 : 1 }}
          />
        </ButtonContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
