import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login";
import CreateAccount from "./CreatAccount";

export default function UnauthenticatedRoutes() {
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
