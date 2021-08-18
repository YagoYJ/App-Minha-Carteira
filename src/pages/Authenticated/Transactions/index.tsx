import React from "react";
import { Entypo } from "@expo/vector-icons";

import { AddButton, Container } from "./styles";
import { theme } from "../../../theme";
import { useNavigation } from "@react-navigation/native";

export default function Transactions() {
  const navigation = useNavigation();

  return (
    <Container>
      <AddButton onPress={() => navigation.navigate("TransactionValue")}>
        <Entypo name="plus" size={40} color={theme.default.colors.white} />
      </AddButton>
    </Container>
  );
}
