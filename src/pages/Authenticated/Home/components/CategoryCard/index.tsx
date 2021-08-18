import React from "react";
import { Feather, Fontisto, FontAwesome5 } from "@expo/vector-icons";

import { Container, Label } from "./styles";
import { theme } from "../../../../../theme";

interface CategoryCardProps {
  label: string;
}

export default function CategoryCard({ label }: CategoryCardProps) {
  return (
    <>
      {label === "Gastos" && (
        <Container style={{ backgroundColor: theme.default.colors.red }}>
          <Feather
            name="alert-circle"
            color={theme.default.colors.white}
            size={35}
          />
          <Label>{label}</Label>
        </Container>
      )}
      {label === "Empréstimos" && (
        <Container style={{ backgroundColor: theme.default.colors.lightPrimary }}>
          <Fontisto
            name="arrow-swap"
            color={theme.default.colors.white}
            size={35}
          />
          <Label>{label}</Label>
        </Container>
      )}
      {label === "Recebidos" && (
        <Container style={{ backgroundColor: theme.default.colors.green }}>
          <FontAwesome5
            name="hand-holding-usd"
            color={theme.default.colors.white}
            size={35}
          />
          <Label>{label}</Label>
        </Container>
      )}
    </>
  );
}
