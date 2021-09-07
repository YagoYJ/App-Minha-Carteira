import React from "react";
import { Feather, Fontisto, FontAwesome5 } from "@expo/vector-icons";

import { Container, Label } from "./styles";
import { theme } from "../../../../../theme";

interface TypeCardProps {
  label: string;
}

export default function TypeCard({ label }: TypeCardProps) {
  return (
    <>
      {label === "Gasto" && (
        <Container style={{ backgroundColor: theme.default.colors.red }}>
          <Feather
            name="alert-circle"
            color={theme.default.colors.white}
            size={35}
          />
          <Label>{label}</Label>
        </Container>
      )}
      {label === "Empréstimo" && (
        <Container
          style={{ backgroundColor: theme.default.colors.lightPrimary }}
        >
          <Fontisto
            name="arrow-swap"
            color={theme.default.colors.white}
            size={35}
          />
          <Label>{label}</Label>
        </Container>
      )}
      {label === "Recebido" && (
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
