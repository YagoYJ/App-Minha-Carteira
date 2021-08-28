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

export const Input = styled.TextInput`
  width: 100%;
  padding: 15px;
  background-color: #ffffff;
  border-width: 1px;
  border-color: #d5dce4;
  border-radius: 8px;
  font-size: 17px;
  font-family: ${fonts.rubikRegular};
  color: ${colors.primary}
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

export const Label = styled.Text`
  font-family: ${fonts.rubikRegular};
  color: ${colors.white};
  font-size: 15px;
  margin-bottom: 10px;
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
