import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Container, Space, Title } from "./styles";
import { theme } from "../../../../theme";

interface HeaderProps {
  pageName: string;
}

export default function Header({ pageName }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <Container>
      <BorderlessButton onPress={() => navigation.goBack()}>
        <Entypo
          name="chevron-left"
          size={40}
          color={theme.default.colors.white}
        />
      </BorderlessButton>
      <Title>{pageName}</Title>
      <Space />
    </Container>
  );
}
