import React, { useState } from "react";
import { Image, Platform, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Content,
  Scroll,
  Logo,
  Form,
  Title,
  Input,
  LinkText,
} from "../styles";

import {
  Buttons,
  ButtonText,
  GoolgeButton,
  Links,
  LoginButton,
} from "./styles";

import LogoGoogle from "../../../assets/google.png";
import LogoMinhaCarteira from "../../../assets/logo-minha-carteira.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#4B7AF8", "#294EB1"]}
      style={{ width: "100%", flex: 1 }}
    >
      <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Content>
          <Scroll showsVerticalScrollIndicator={false}>
            <Form>
              <Logo source={LogoMinhaCarteira} resizeMode="contain" />
              <Title>Login</Title>
              <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Input
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
              />

              <Buttons>
                <GoolgeButton>
                  <Image source={LogoGoogle} resizeMode="contain" />
                </GoolgeButton>
                <LoginButton>
                  <ButtonText>Entrar</ButtonText>
                </LoginButton>
              </Buttons>

              <Links>
                <TouchableOpacity>
                  <LinkText>Esqueci minha senha</LinkText>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate("CreateAccount")}
                >
                  <LinkText>Usuário novo? Criar conta</LinkText>
                </TouchableOpacity>
              </Links>
            </Form>
          </Scroll>
        </Content>
      </Container>
    </LinearGradient>
  );
}
