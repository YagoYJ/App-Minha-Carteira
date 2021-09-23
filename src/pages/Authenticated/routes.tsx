import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import Home from "./Home";
import TransactionsRoutes from "./Transactions/routes";
import Profile from "./Profile";

import { theme } from "../../theme";

export default function AuthRoutes() {
  const AuthTab = createBottomTabNavigator();
  return (
    <AuthTab.Navigator
      tabBarOptions={{
        activeTintColor: theme.default.colors.primary,
        inactiveTintColor: theme.default.colors.gray,
        labelPosition: "beside-icon",
        style: {
          height: 65,
        },
        showLabel: false,
        keyboardHidesTabBar: true,
      }}
    >
      <AuthTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: undefined,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      <AuthTab.Screen
        name="Transactions"
        component={TransactionsRoutes}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="wallet" color={color} size={size} />
          ),
        }}
      />
      <AuthTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="user-alt" color={color} size={size} />
          ),
        }}
      />
    </AuthTab.Navigator>
  );
}
