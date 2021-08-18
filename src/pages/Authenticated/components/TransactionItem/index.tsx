import React from "react";
import { TransactionItemProps } from "../TransactionsList";
import CategoryIcon from "./components/CategoryIcon";
import {
  Container,
  DataBillingWay,
  DataCategory,
  DataContainer,
  DataTexts,
  ValueTextBlue,
  ValueTextGreen,
  ValueTextRed,
} from "./styles";

interface ItemProps {
  item: Omit<TransactionItemProps, "id">;
}

export default function TransactionItem({ item }: ItemProps) {
  return (
    <Container>
      <DataContainer>
        <CategoryIcon category={item.category} />
        <DataTexts>
          <DataCategory>{item.description}</DataCategory>
          <DataBillingWay>{item.billingWay}</DataBillingWay>
        </DataTexts>
      </DataContainer>

      {item.category === "Recebidos" && (
        <ValueTextGreen>+ R$ {item.value}</ValueTextGreen>
      )}
      {item.category === "Empréstimos" && (
        <ValueTextBlue>R$ {item.value}</ValueTextBlue>
      )}
      {item.category === "Gastos" && (
        <ValueTextRed>- R$ {item.value}</ValueTextRed>
      )}
    </Container>
  );
}
