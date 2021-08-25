import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../../../theme";
import { TransactionItemProps } from "../../Transactions/components/TransactionsList";
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
  last?: boolean;
}

export default function TransactionItem({ item, last }: ItemProps) {
  return (
    <Container last={last}>
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
        <ValueTextBlue>
          <Fontisto
            name="arrow-swap"
            color={theme.default.colors.lightPrimary}
            size={13}
          />{" "}
          R$ {item.value}
        </ValueTextBlue>
      )}
      {item.category === "Gastos" && (
        <ValueTextRed>- R$ {item.value}</ValueTextRed>
      )}
    </Container>
  );
}
