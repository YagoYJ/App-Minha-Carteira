import { theme } from "../../../theme";

type objectLiteral = {
  [key: string]: any;
};

export const TypeLiterals: objectLiteral = {
  Gasto: {
    color: theme.default.colors.red,
    prefix: "minus-a",
  },
  Empréstimo: {
    color: theme.default.colors.lightPrimary,
    prefix: "arrow-swap",
  },
  Recebido: {
    color: theme.default.colors.green,
    prefix: "plus-a",
  },
};
