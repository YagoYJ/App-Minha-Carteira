import React from "react";
import { Fontisto, Feather, FontAwesome5 } from "@expo/vector-icons";

import {
  Container,
  DataPayment,
  DataType,
  DataContainer,
  DataTexts,
  Icon,
} from "./styles";
import { useNavigation } from "@react-navigation/core";
import { ValueText } from "./styles";
import { Transaction } from "../../types/transactions";
import { TypeLiterals } from "../../types/types";
import { theme } from "../../../../theme";
import { RectButtonProps } from "react-native-gesture-handler";

type TransactionItemProps = RectButtonProps & {
  item: Transaction;
};

export default function TransactionItem({
  item,
  ...rest
}: TransactionItemProps) {
  const navigation = useNavigation();
  function handleInfo() {
    navigation.navigate("TransactionEdit", { item });
  }

  return (
    <Container onPress={handleInfo} {...rest}>
      <DataContainer>
        <Icon style={{ backgroundColor: TypeLiterals[item.data.type].color }}>
          {item.data.type === "Recebido" && (
            <FontAwesome5
              name="hand-holding-usd"
              color={theme.default.colors.white}
              size={20}
            />
          )}
          {item.data.type === "Gasto" && (
            <Feather
              name="alert-circle"
              color={theme.default.colors.white}
              size={20}
            />
          )}
          {item.data.type === "Empréstimo" && (
            <Fontisto
              name="arrow-swap"
              color={theme.default.colors.white}
              size={20}
            />
          )}
        </Icon>

        <DataTexts>
          <DataType>{item.data.description}</DataType>
          <DataPayment>{item.data.payment}</DataPayment>
        </DataTexts>
      </DataContainer>

      <ValueText style={{ color: TypeLiterals[item.data.type].color }}>
        <Fontisto
          name={TypeLiterals[item.data.type].prefix}
          color={TypeLiterals[item.data.type].color}
          size={13}
        />{" "}
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(item.data.value)}
      </ValueText>
    </Container>
  );
}
