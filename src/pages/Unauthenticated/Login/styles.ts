import styled from "styled-components/native";
import { theme } from "../../../theme";

const { colors, fonts } = theme.default;

export const Buttons = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const GoolgeButton = styled(Button)`
  width: 29%;
  background-color: ${colors.white};
`;

export const LoginButton = styled(Button)`
  width: 69%;
  background-color: ${colors.primary};
  border-width: 1px;
  border-color: ${colors.primary};
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 15px;
  font-family: ${fonts.rubikBold};
`;

export const Links = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 60px;
`;
