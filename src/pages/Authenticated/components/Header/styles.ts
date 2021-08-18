import styled from "styled-components/native";
import { theme } from "../../../../theme";

const { colors, fonts } = theme.default;

export const Container = styled.View`
  width: 100%;
  height: 105px;
  background-color: ${colors.lightPrimary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  padding-top: 10px;
`;

export const Title = styled.Text`
  width: 80%;
  font-size: 25px;
  font-family: ${fonts.rubikRegular};
  color: ${colors.white};
  text-align: center;
`;

export const Space = styled.View`
  width: 30%;
`;
