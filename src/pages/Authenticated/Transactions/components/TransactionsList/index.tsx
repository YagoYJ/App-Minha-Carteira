import React from "react";
import { ListRenderItemInfo, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import TransactionItem from "../../../components/TransactionItem";
import { Container } from "./styles";

export interface TransactionItemProps {
  id: string;
  description: string;
  category: string;
  billingWay: string;
  value: number;
}

export interface TransactionListProps {
  items: Array<TransactionItemProps>;
}

export default function TransactionList({ items }: TransactionListProps) {
  return (
    <Container>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({
          item,
          index,
        }: ListRenderItemInfo<TransactionItemProps>) => (
          <TransactionItem
            item={item}
            last={items.length - 1 === index ? true : false}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
