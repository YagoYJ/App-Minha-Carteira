import styled from "styled-components/native";
import { theme } from "../../../../../theme";

const { colors, fonts } = theme.default;

export const Container = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 17px;
  background-color: ${colors.lightPrimary};
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.rubikRegular};
  font-size: 20px;
`;
