import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

import UnauthenticatedRoutes from "./src/pages/Unauthenticated/routes";
import { theme } from "./src/theme";
import AuthRoutes from "./src/pages/Authenticated/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {/* <UnauthenticatedRoutes /> */}
        <AuthRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
