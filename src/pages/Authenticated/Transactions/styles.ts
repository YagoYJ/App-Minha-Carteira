import styled from "styled-components/native";
import { theme } from "../../../theme";

const { colors, fonts } = theme.default;

export const FilterContainer = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const Filter = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lightPrimary};
  padding: 20px;
`;

export const Label = styled.Text`
  font-family: ${fonts.rubikRegular};
  color: ${colors.white};
  font-size: 15px;
  margin-bottom: 10px;
`;

export const RowInputs = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const RowInput = styled.View`
  width: 45%;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CalendarToggle = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  background-color: #ffffff;
  border-width: 1px;
  border-color: #d5dce4;
  border-radius: 8px;
`;

export const CalendarTogglePlaceholder = styled.Text`
  font-size: 17px;
  font-family: ${fonts.rubikRegular};
  color: ${colors.gray};
`;

export const CalendarToggleText = styled.Text`
  font-size: 17px;
  font-family: ${fonts.rubikRegular};
  color: ${colors.primary};
`;

export const ModalContent = styled.View`
  border-radius: 8px;
  padding: 20px;
  background-color: ${colors.white};
`;

export const ModalTitle = styled.Text`
  color: ${colors.primary};
  text-align: center;
  font-family: ${fonts.rubikBold};
  font-size: 23px;
  margin-bottom: 30px;
`;

export const ButtonContainer = styled.View`
  margin-top: 30px;
`;

export const FilterButtons = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const FilterButton = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const Container = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 20px;
`;

export const FilterIconContainer = styled.View`
  width: 100%;
  align-items: flex-end;
  padding: 20px 20px;
`;

export const AddButton = styled.TouchableOpacity`
  width: 77px;
  height: 77px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lightPrimary};
  border-radius: 50px;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
