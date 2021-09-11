import React from "react";
import { Fontisto, Feather } from "@expo/vector-icons";
import { theme } from "../../../../theme";
import TypeIcon from "./components/TypeIcon";
import {
  Container,
  DataPayment,
  DataType,
  DataContainer,
  DataTexts,
  ValueTextBlue,
  ValueTextGreen,
  ValueTextRed,
  DeleteButton,
} from "./styles";
import { Transaction } from "../../types/transactions";
import { Swipeable } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

type TransactionItemProps = {
  item: Transaction;
};

export default function TransactionItem({ item }: TransactionItemProps) {
  function handleInfo() {
    console.log("Info: ", item);
  }

  function handleRemove() {
    console.log("Remove: ", item);
  }

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <DeleteButton onPress={handleRemove}>
            <Feather
              name="trash"
              size={25}
              color={theme.default.colors.white}
            />
          </DeleteButton>
        </Animated.View>
      )}
    >
      <Container onPress={handleInfo}>
        <DataContainer>
          <TypeIcon type={item.data.type} />
          <DataTexts>
            <DataType>{item.data.description}</DataType>
            <DataPayment>{item.data.payment}</DataPayment>
          </DataTexts>
        </DataContainer>

        {item.data.type === "Recebido" && (
          <ValueTextGreen>+ R$ {item.data.value}</ValueTextGreen>
        )}
        {item.data.type === "Empréstimo" && (
          <ValueTextBlue>
            <Fontisto
              name="arrow-swap"
              color={theme.default.colors.lightPrimary}
              size={13}
            />{" "}
            R$ {item.data.value}
          </ValueTextBlue>
        )}
        {item.data.type === "Gasto" && (
          <ValueTextRed>- R$ {item.data.value}</ValueTextRed>
        )}
      </Container>
    </Swipeable>
  );
}
