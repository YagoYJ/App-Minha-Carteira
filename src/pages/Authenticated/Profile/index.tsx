import React from "react";
import Modal from "react-native-modal";
import { useState } from "react";
import {
  AcceptButton,
  Bar,
  Buttons,
  ButtonText,
  Container,
  DeclineButton,
  Title,
} from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export default function Profile() {
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation();

  function closeModal() {
    navigation.goBack();
    setModalVisible(false);
  }

  useFocusEffect(
    React.useCallback(() => {
      setModalVisible(true);
    }, [modalVisible])
  );

  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={closeModal}
      onSwipeComplete={closeModal}
      swipeDirection={["up", "left", "right", "down"]}
      style={{
        justifyContent: "flex-end",
        margin: 0,
      }}
    >
      <Container>
        <Bar />
        <Title>Deseja mesmo sair?</Title>
        <Buttons>
          <DeclineButton onPress={closeModal}>
            <ButtonText>Não</ButtonText>
          </DeclineButton>
          <AcceptButton>
            <ButtonText>Sim</ButtonText>
          </AcceptButton>
        </Buttons>
      </Container>
    </Modal>
  );
}
