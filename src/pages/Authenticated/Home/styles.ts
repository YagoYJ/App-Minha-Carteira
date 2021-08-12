import styled from "styled-components/native";
import { theme } from "../../../theme";

const { colors, fonts } = theme.default;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TopHeader = styled.View`
  width: 100%;
  height: 265px;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.lightPrimary};
`;

export const TitleTexts = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 65px;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.rubikBold};
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.rubikRegular};
  font-size: 40px;
  text-align: center;
`;

export const Card = styled.View`
  width: 90%;
  padding: 25px 15px;
  background-color: ${colors.white};
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-top: -70px;
`;

export const Values = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray};
`;

export const Value = styled.View`
  width: 50%;
  align-items: flex-start;
  justify-content: center;
`;

export const ValueTitle = styled.Text`
  font-family: ${fonts.rubikBold};
  font-size: 15px;
`;

export const ValueSubTitle = styled.Text`
  font-family: ${fonts.rubikLight};
  font-size: 20px;
`;

export const ValueTitleGreen = styled(ValueTitle)`
  color: ${colors.green};
`;

export const ValueSubTitleGreen = styled(ValueSubTitle)`
  color: ${colors.green};
`;

export const ValueTitleRed = styled(ValueTitle)`
  color: ${colors.red};
`;

export const ValueSubTitleRed = styled(ValueSubTitle)`
  color: ${colors.red};
`;

export const TotalValue = styled.View`
  width: 100%;
  padding-top: 15px;
  align-items: center;
  justify-content: center;
`;

export const TotalValueText = styled.Text`
  font-family: ${fonts.rubikRegular};
  font-size: 20px;
`;

export const TotalValueTextGreen = styled(TotalValueText)`
  color: ${colors.green};
`;

export const TotalValueTextRed = styled(TotalValueText)`
  color: ${colors.red};
`;
