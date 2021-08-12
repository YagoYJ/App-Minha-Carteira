import styled from "styled-components/native";
import { theme } from "../../../theme";

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

export const Buttons = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const GoolgeButton = styled(Button)`
  width: 29%;
  background-color: ${colors.white};
`;

export const LoginButton = styled(Button)`
  width: 69%;
  background-color: ${colors.primary};
  border-width: 1px;
  border-color: ${colors.primary};
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 15px;
  font-family: ${fonts.rubikBold};
`;

export const Links = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 60px;
`;

export const LinkText = styled.Text`
  color: ${colors.white};
  font-size: 13px;
  font-family: ${fonts.rubikLight};
  text-decoration: underline;
  text-decoration-color: ${colors.white};
  line-height: 20px;
`;
