import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Text } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import { MaterialIcons } from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";

import SubmitButton from "../components/SubmitButton";

import { theme } from "../../../../theme";
import {
  CalendarContainer,
  Container,
  Form,
  Input,
  InputContainer,
  Label,
} from "./styles";
import { useEffect } from "react";

interface RouteParamsProps {
  key: string;
  name: string;
  params: {
    value: number;
  };
}

export default function TransactionInfo() {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [payment, setPayment] = useState("");
  const [date, setDate] = useState<Date>();
  const [buttonDisable, setButtonDisable] = useState(true);

  const { params } = useRoute<RouteParamsProps>();

  function handleSubmit() {
    const payload = {
      ...params,
      description,
      type,
      payment,
      date,
    };
    console.log(payload);
  }

  useEffect(() => {
    if (description && type && payment && date) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [description, type, payment, date]);

  return (
    <Container>
      <Form>
        <InputContainer>
          <Label>Descrição</Label>
          <Input
            placeholder="Água, Internet, Energia, etc..."
            placeholderTextColor={theme.default.colors.gray}
            value={description}
            onChangeText={setDescription}
          />
        </InputContainer>
        <InputContainer>
          <Label>Tipo</Label>
          <ModalDropdown
            options={["Selecione", "Recebido", "Gasto", "Transferência"]}
            onSelect={setType}
            defaultValue={!type ? "Selecione" : "Selecione"}
            style={{
              width: "100%",
              padding: 15,
              borderWidth: 1,
              borderColor: "#d5dce4",
              borderRadius: 8,
              backgroundColor: "#ffffff",
            }}
            dropdownTextHighlightStyle={{
              color: type
                ? theme.default.colors.primary
                : theme.default.colors.gray,
            }}
            textStyle={{
              fontSize: 17,
              fontFamily: theme.default.fonts.rubikRegular,
              color: type
                ? theme.default.colors.primary
                : theme.default.colors.gray,
            }}
            dropdownStyle={{
              width: "90%",
              borderRadius: 8,
              marginLeft: -15,
              marginTop: 15,
            }}
            dropdownTextStyle={{
              fontSize: 17,
              fontFamily: theme.default.fonts.rubikRegular,
            }}
          />
        </InputContainer>
        <InputContainer>
          <Label>Forma de pagamento</Label>
          <Input
            placeholder="Nubank, Inter, etc..."
            placeholderTextColor={theme.default.colors.gray}
            value={payment}
            onChangeText={setPayment}
          />
        </InputContainer>
        <InputContainer>
          <Label>Data</Label>
          <CalendarContainer>
            <CalendarPicker
              headerWrapperStyle={{
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
              selectedDayColor={theme.default.colors.lightPrimary}
              selectedDayTextColor={theme.default.colors.white}
              weekdays={["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]}
              selectMonthTitle="Selecione o mês de "
              monthTitleStyle={{
                color: theme.default.colors.primary,
              }}
              months={[
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro",
              ]}
              selectYearTitle="Selecione o ano"
              yearTitleStyle={{
                color: theme.default.colors.primary,
              }}
              maxDate={new Date(Date.now())}
              nextComponent={
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color={theme.default.colors.primary}
                />
              }
              previousComponent={
                <MaterialIcons
                  name="keyboard-arrow-left"
                  size={30}
                  color={theme.default.colors.primary}
                />
              }
              onDateChange={(date) =>
                setDate(
                  new Date(
                    date.creationData().input?.year,
                    date.creationData().input?.month,
                    date.creationData().input?.day
                  )
                )
              }
            />
          </CalendarContainer>
        </InputContainer>
        <SubmitButton
          text="Cadastrar"
          onPress={handleSubmit}
          disabled={buttonDisable}
          // disabled={!description && !type && !payment && !date ? true : false}
          style={{ opacity: buttonDisable ? 0.5 : 1 }}
        />
      </Form>
    </Container>
  );
}
