import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "../components/Header";
import Transactions from ".";
import TransactionInfo from "./TransactionInfo";
import TransactionValue from "./TransactionValue";
import TransactionEdit from "./TransactionEdit";
import SuccessAnimation from "./SuccessAnimation";

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
        component={TransactionValue}
        options={{
          header: () => <Header pageName="Adicionar Transação" />,
        }}
      />
      <Stack.Screen
        name="TransactionInfo"
        component={TransactionInfo}
        options={{
          header: () => <Header pageName="Adicionar Transação" />,
        }}
      />
      <Stack.Screen
        name="TransactionEdit"
        component={TransactionEdit}
        options={{
          header: () => <Header pageName="Editar Transação" />,
        }}
      />
      <Stack.Screen
        name="SuccessAnimation"
        component={SuccessAnimation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
