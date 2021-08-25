import styled from "styled-components/native";
import MaskInput, { MaskInputProps } from "react-native-mask-input";

import { theme } from "../../../../theme";

const { colors, fonts } = theme.default;

export const Container = styled.View`
  padding: 24px;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  color: ${colors.primary};
  font-size: 25px;
  font-family: ${fonts.rubikBold};
`;

export const Input = styled(MaskInput)<MaskInputProps>`
  width: 100%;
  font-size: 50px;
  font-family: ${fonts.rubikBold};
  color: ${colors.lightPrimary};
  padding-left: 20px;
  text-align: center;
  margin: 100px 0;
`;

export const ButtonContainer = styled.View`
  width: 100%;
`;
