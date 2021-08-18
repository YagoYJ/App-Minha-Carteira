import styled from "styled-components/native";
import { theme } from "../../../../theme";

const { colors, fonts } = theme.default;

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

export const DataContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DataTexts = styled.View`
  height: 40px;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 10px;
`;

export const DataCategory = styled.Text`
  font-family: ${fonts.rubikRegular};
  font-size: 15px;
  color: ${colors.darkPrimary};
`;

export const DataBillingWay = styled.Text`
  font-family: ${fonts.rubikLight};
  font-size: 15px;
  color: ${colors.gray};
`;

export const ValueText = styled.Text`
  font-size: 15px;
  font-family: ${fonts.rubikBold};
`;

export const ValueTextGreen = styled(ValueText)`
  color: ${colors.green};
`;

export const ValueTextRed = styled(ValueText)`
  color: ${colors.red};
`;

export const ValueTextBlue = styled(ValueText)`
  color: ${colors.lightPrimary};
`;
