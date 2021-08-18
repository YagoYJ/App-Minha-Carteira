import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Transactions from ".";
import TransactionInfo from "./TransactionInfo";
import TransactionValue from "./TransactionValue";
import Header from "../components/Header";

export default function TransactionsRoutes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Transactions">
      <Stack.Screen
        name="Transactions"
        component={Transactions}
        options={{
          header: () => <Header pageName="Transações" />,
        }}
      />
      <Stack.Screen
        name="TransactionValue"
        component={TransactionInfo}
        options={{
          header: () => <Header pageName="Adicionar Transação" />,
        }}
      />
      <Stack.Screen
        name="TransactionInfo"
        component={TransactionValue}
        options={{
          header: () => <Header pageName="Adicionar Transação" />,
        }}
      />
    </Stack.Navigator>
  );
}
