import styled from "styled-components/native";
import { theme } from "../../../theme";

const {colors, fonts} = theme.default

export const Buttons = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${colors.primary};
  border-width: 1px;
  border-color: ${colors.primary};
  margin-bottom: 15px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 15px;
  font-family: ${fonts.rubikBold};
`;
