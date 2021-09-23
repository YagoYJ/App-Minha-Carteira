import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { theme } from "../../../../theme";

const { colors, fonts } = theme.default;

export const Container = styled(RectButton)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  background-color: ${colors.white};
`;

export const DataContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled.View`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const DataTexts = styled.View`
  height: 40px;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 10px;
`;

export const DataType = styled.Text`
  font-family: ${fonts.rubikRegular};
  font-size: 15px;
  color: ${colors.darkPrimary};
`;

export const DataPayment = styled.Text`
  font-family: ${fonts.rubikLight};
  font-size: 15px;
  color: ${colors.gray};
`;

export const ValueText = styled.Text`
  font-size: 15px;
  font-family: ${fonts.rubikBold};
`;
