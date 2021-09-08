import styled from "styled-components/native";
import { theme } from "../../../../theme";

const { colors } = theme.default;

export const ModalContent = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lightPrimary};
`;
