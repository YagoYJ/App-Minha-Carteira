import { useRoute } from "@react-navigation/native";
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
} from "./styles";
import { useEffect } from "react";
import TypeSelect from "../components/TypeSelect";
import Calendar from "../components/Calendar";
import { DateInputProps } from "../../types/transactions";

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
          <TypeSelect type={type} onSelect={setType} defaultValue="Selecione" />
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
              onDateChange={(date) => {
                const input: DateInputProps = date.creationData()
                  .input as DateInputProps;

                setDate(new Date(input.year, input.month, input.day));
              }}
            />
          </CalendarContainer>
        </InputContainer>

        <SubmitButton
          text="Cadastrar"
          onPress={handleSubmit}
          disabled={buttonDisable}
          style={{ opacity: buttonDisable ? 0.5 : 1 }}
        />
      </Form>
    </Container>
  );
}
