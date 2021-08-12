import styled from "styled-components/native";
import { theme } from "../../theme";

const { colors, fonts } = theme.default;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Scroll = styled.ScrollView`
  width: 100%;
`;

export const Logo = styled.Image`
  margin-top: 40px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 25px;
  font-family: ${fonts.rubikBold};
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  background-color: ${colors.white};
  padding: 15px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${colors.gray};
  margin-bottom: 15px;
`;

export const LinkText = styled.Text`
  color: ${colors.white};
  font-size: 13px;
  font-family: ${fonts.rubikLight};
  text-decoration: underline;
  text-decoration-color: ${colors.white};
  line-height: 20px;
`;
