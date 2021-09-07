import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../../../theme";
import TypeIcon from "./components/TypeIcon";
import {
  Container,
  DataPayment,
  DataType,
  DataContainer,
  DataTexts,
  ValueTextBlue,
  ValueTextGreen,
  ValueTextRed,
} from "./styles";
import { Transaction } from "../../types/transactions";

type TransactionItemProps = {
  item: Transaction;
};

export default function TransactionItem({ item }: TransactionItemProps) {
  return (
    <Container>
      <DataContainer>
        <TypeIcon type={item.data.type} />
        <DataTexts>
          <DataType>{item.data.description}</DataType>
          <DataPayment>{item.data.payment}</DataPayment>
        </DataTexts>
      </DataContainer>

      {item.data.type === "Recebido" && (
        <ValueTextGreen>+ R$ {item.data.value}</ValueTextGreen>
      )}
      {item.data.type === "Empréstimo" && (
        <ValueTextBlue>
          <Fontisto
            name="arrow-swap"
            color={theme.default.colors.lightPrimary}
            size={13}
          />{" "}
          R$ {item.data.value}
        </ValueTextBlue>
      )}
      {item.data.type === "Gasto" && (
        <ValueTextRed>- R$ {item.data.value}</ValueTextRed>
      )}
    </Container>
  );
}
