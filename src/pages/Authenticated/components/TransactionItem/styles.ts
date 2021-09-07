import styled from "styled-components/native";
import { theme } from "../../../../theme";

const { colors, fonts } = theme.default;

interface ContainerProps {
  last?: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  padding-bottom: ${(props) => (props.last ? "110px" : "10px")};
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

export const ValueTextGreen = styled(ValueText)`
  color: ${colors.green};
`;

export const ValueTextRed = styled(ValueText)`
  color: ${colors.red};
`;

export const ValueTextBlue = styled(ValueText)`
  color: ${colors.lightPrimary};
`;
