import React from "react";
import { ListRenderItemInfo, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import TransactionItem from "../../../components/TransactionItem";
import { Transaction } from "../../../types/transactions";
import { Container } from "./styles";

export default function TransactionList(items: Transaction[]) {
  console.log("LIIST: ", items);

  return (
    <Container>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }: ListRenderItemInfo<Transaction>) => (
          <TransactionItem
            item={item.data}
            last={items.length - 1 === index ? true : false}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
