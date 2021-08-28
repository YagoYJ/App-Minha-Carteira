import styled from "styled-components/native";
import { theme } from "../../../../theme";

const { colors, fonts } = theme.default;

export const Container = styled.ScrollView`
  flex: 1;
  padding: 50px 20px;
`;

export const Form = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;
`;
export const InputContainer = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-family: ${fonts.rubikRegular};
  color: ${colors.lightPrimary};
  font-size: 23px;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 15px;
  border: 1px solid #d5dce4;
  border-radius: 8px;
  background-color: #fff;
  font-size: 17px;
  font-family: ${fonts.rubikRegular};
  color: ${colors.primary};
`;

export const CalendarContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
