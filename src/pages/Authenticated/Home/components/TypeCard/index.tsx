import React from "react";
import { Feather, Fontisto, FontAwesome5 } from "@expo/vector-icons";

import { Container, Label } from "./styles";
import { theme } from "../../../../../theme";
import { TypeLiterals } from "../../../types/types";

interface TypeCardProps {
  label: string;
}

export default function TypeCard({ label }: TypeCardProps) {
  return (
    <Container style={{ backgroundColor: TypeLiterals[label].color }}>
      {label === "Gasto" && (
        <Feather
          name="alert-circle"
          color={theme.default.colors.white}
          size={35}
        />
      )}
      {label === "Empréstimo" && (
        <Fontisto
          name="arrow-swap"
          color={theme.default.colors.white}
          size={35}
        />
      )}
      {label === "Recebido" && (
        <FontAwesome5
          name="hand-holding-usd"
          color={theme.default.colors.white}
          size={35}
        />
      )}
      <Label>{label}</Label>
    </Container>
  );
}
