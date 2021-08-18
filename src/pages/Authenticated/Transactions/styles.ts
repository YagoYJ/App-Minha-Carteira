import styled from "styled-components/native";
import { theme } from "../../../theme";

const { colors, fonts } = theme.default;

export const Container = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 20px;
`;

export const AddButton = styled.TouchableOpacity`
  width: 77px;
  height: 77px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lightPrimary};
  border-radius: 50px;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
