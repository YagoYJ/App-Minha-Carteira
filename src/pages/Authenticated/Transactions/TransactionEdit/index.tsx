import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";

import SubmitButton from "../components/SubmitButton";

import { theme } from "../../../../theme";
import {
  CalendarContainer,
  Container,
  Form,
  Input,
  InputContainer,
  Label,
  ValueInput,
} from "./styles";
import { useEffect } from "react";
import TypeSelect from "../components/TypeSelect";
import Calendar from "../components/Calendar";
import { DateInputProps, Transaction } from "../../types/transactions";
import firebase from "../../../../configs/firebase";
import { Masks } from "react-native-mask-input";

interface RouteParamsProps {
  key: string;
  name: string;
  params: {
    item: Transaction;
  };
}

export default function TransactionEdit() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [payment, setPayment] = useState("");
  const [date, setDate] = useState("");
  const [dateFormatted, setDateFormatted] = useState<Date>();
  const [buttonDisable, setButtonDisable] = useState(true);

  const { params } = useRoute<RouteParamsProps>();
  const navigation = useNavigation();

  const types = ["Selecione", "Recebido", "Gasto", "Empréstimo"];

  function handleEdit() {
    const numberValue = Number(value) / 100;
    console.log("value", numberValue);
    const payload = {
      value: numberValue,
      description,
      type: types[Number(type)],
      payment,
      date,
    };

    firebase
      .firestore()
      .collection("transactions")
      .doc(params.item.id)
      .update(payload);

    return navigation.navigate("SuccessAnimation");
  }

  useEffect(() => {
    if (description && type && payment && date) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [description, type, payment, date]);

  useEffect(() => {
    setValue(String(params.item.data.value));
    setDescription(params.item.data.description);
    setType(String(types.indexOf(params.item.data.type)));
    setPayment(params.item.data.payment);
    setDate(params.item.data.date);
    const formattedDate = params.item.data.date.split("-");
    setDateFormatted(
      new Date(
        Number(formattedDate[0]),
        Number(formattedDate[1]),
        Number(formattedDate[2])
      )
    );
  }, []);

  return (
    <Container>
      <Form>
        <InputContainer>
          <Label>Valor</Label>
          <ValueInput
            mask={Masks.BRL_CURRENCY}
            value={value}
            onChangeText={(masked, unmasked, obfuscated) => {
              setValue(unmasked);
            }}
            maxLength={20}
            keyboardType="number-pad"
          />
        </InputContainer>

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
          <TypeSelect
            type={type}
            onSelect={setType}
            defaultValue={params.item.data.type}
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
            <Calendar
              initialDate={dateFormatted}
              selectedStartDate={dateFormatted}
              onDateChange={(date) => {
                const input: DateInputProps = date.creationData()
                  .input as DateInputProps;

                setDate(`${input.year}-${input.month}-${input.day}`);
              }}
            />
          </CalendarContainer>
        </InputContainer>

        <SubmitButton
          text="Editar"
          onPress={handleEdit}
          disabled={buttonDisable}
          style={{ opacity: buttonDisable ? 0.5 : 1 }}
        />
      </Form>
    </Container>
  );
}
