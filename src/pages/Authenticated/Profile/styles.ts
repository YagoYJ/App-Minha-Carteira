import styled from "styled-components/native";
import { theme } from "../../../theme";

const { colors, fonts } = theme.default;

export const Container = styled.View`
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: space-around;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${colors.primary};
`;

export const Bar = styled.View`
  width: 55px;
  height: 5px;
  border-radius: 50px;
  background-color: ${colors.lightPrimary};
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 28px;
  font-family: ${fonts.rubikRegular};
`;

export const Buttons = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 48%;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-radius: 8px;
  padding: 20px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.rubikRegular};
  font-size: 20px;
`;

export const AcceptButton = styled(Button)`
  background-color: ${colors.red};
  border-color: ${colors.red};
`;

export const DeclineButton = styled(Button)`
  background-color: ${colors.primary};
  border-color: ${colors.lightPrimary};
`;
