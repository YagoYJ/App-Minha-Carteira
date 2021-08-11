import styled from "styled-components/native";

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

export const Logo = styled.View`
  width: 40%;
  height: 100px;
  background-color: #fff;
  margin: 60px auto 0 auto;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #d5dce4;
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
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
`;

export const GoolgeButton = styled(Button)`
  width: 29%;
  background-color: #fff;
`;

export const LoginButton = styled(Button)`
  width: 69%;
  background-color: #294eb1;
  border-width: 1px;
  border-color: #294eb1;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

export const Links = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 60px;
`;

export const LinkText = styled.Text`
  color: #ffffff;
  font-size: 13px;
  font-weight: 300;
  text-decoration: underline;
  text-decoration-color: #ffffff;
  line-height: 20px;
`;
