import React, { useState } from "react";
import Modal from "react-native-modal";
import AnimatedLottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/core";

import { ModalContent } from "./styles";

export default function SuccessAnimation() {
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation();

  function finishAnimation() {
    navigation.navigate("Transactions");
    setModalVisible(false);
  }

  return (
    <Modal
      isVisible={modalVisible}
      style={{
        justifyContent: "flex-end",
        margin: 0,
      }}
    >
      <ModalContent>
        <AnimatedLottieView
          source={require("../../../../assets/money-success.json")}
          loop={false}
          autoPlay
          onAnimationFinish={finishAnimation}
        />
      </ModalContent>
    </Modal>
  );
}
