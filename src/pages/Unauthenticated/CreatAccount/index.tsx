import React, { useState } from "react";
import { Platform, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Content,
  Form,
  Input,
  LinkText,
  Logo,
  Scroll,
  Title,
} from "../styles";

import LogoMinhaCarteira from "../../../assets/logo-minha-carteira.png";
import { Button, Buttons, ButtonText } from "./styles";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
              <Title>Criar conta</Title>
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

              <Input
                placeholder="Confirmar senha"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
              />

              <Buttons>
                <Button>
                  <ButtonText>Entrar</ButtonText>
                </Button>

                <TouchableOpacity
                  onPress={() => navigation.navigate("Login")}
                >
                  <LinkText>Já possui uma conta? Fazer Login</LinkText>
                </TouchableOpacity>
              </Buttons>
            </Form>
          </Scroll>
        </Content>
      </Container>
    </LinearGradient>
  );
}
