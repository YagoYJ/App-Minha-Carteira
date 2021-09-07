import React from "react";
import { Feather, Fontisto, FontAwesome5 } from "@expo/vector-icons";

import { Container } from "./styles";
import { theme } from "../../../../../../theme";

interface TypeCardProps {
  type: string;
}

export default function TypeIcon({ type }: TypeCardProps) {
  return (
    <>
      {type === "Gasto" && (
        <Container style={{ backgroundColor: theme.default.colors.red }}>
          <Feather
            name="alert-circle"
            color={theme.default.colors.white}
            size={20}
          />
        </Container>
      )}
      {type === "Empréstimo" && (
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
      {type === "Recebido" && (
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
