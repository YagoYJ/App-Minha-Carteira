import styled from "styled-components/native";
import { theme } from "../../../../../theme";

const { colors, fonts } = theme.default;

export const Container = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
`;

export const Label = styled.Text`
  color: ${colors.white};
  font-size: 15px;
  font-family: ${fonts.rubikLight};
  margin-top: 10px;
`;
