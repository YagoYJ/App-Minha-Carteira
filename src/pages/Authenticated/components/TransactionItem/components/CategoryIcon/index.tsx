import React from "react";
import { Feather, Fontisto, FontAwesome5 } from "@expo/vector-icons";

import { Container } from "./styles";
import { theme } from "../../../../../../theme";

interface CategoryCardProps {
  category: string;
}

export default function CategoryIcon({ category }: CategoryCardProps) {
  return (
    <>
      {category === "Gasto" && (
        <Container style={{ backgroundColor: theme.default.colors.red }}>
          <Feather
            name="alert-circle"
            color={theme.default.colors.white}
            size={20}
          />
        </Container>
      )}
      {category === "Empréstimo" && (
        <Container
          style={{ backgroundColor: theme.default.colors.lightPrimary }}
        >
          <Fontisto
            name="arrow-swap"
            color={theme.default.colors.white}
            size={20}
          />
        </Container>
      )}
      {category === "Recebido" && (
        <Container style={{ backgroundColor: theme.default.colors.green }}>
          <FontAwesome5
            name="hand-holding-usd"
            color={theme.default.colors.white}
            size={20}
          />
        </Container>
      )}
    </>
  );
}
