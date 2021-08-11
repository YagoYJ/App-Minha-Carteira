import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/Unauthenticated/Login";
import CreateAccount from "./pages/Unauthenticated/CreatAccount";

export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
