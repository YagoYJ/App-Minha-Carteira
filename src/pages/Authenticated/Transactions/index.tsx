import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { format } from "date-fns";

import TypeSelect from "./components/TypeSelect";
import TransactionList, {
  TransactionListProps,
} from "./components/TransactionsList";

import {
  AddButton,
  ModalContent,
  CalendarToggle,
  CalendarTogglePlaceholder,
  Container,
  Filter,
  FilterButton,
  FilterButtons,
  FilterContainer,
  FilterIconContainer,
  Label,
  RowInput,
  RowInputs,
  ButtonContainer,
  ModalTitle,
  CalendarToggleText,
} from "./styles";

import Calendar from "./components/Calendar";
import SubmitButton from "./components/SubmitButton";

import { theme } from "../../../theme";
interface DateInputProps {
  day: number;
  month: number;
  year: number;
}

export default function Transactions() {
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [typeFilter, setTypeFilter] = useState("");
  const [dateRange, setDateRange] = useState<DateInputProps[]>([]);
  const [dateSelectedText, setDateSelectedText] = useState("");

  const navigation = useNavigation();

  const { items }: TransactionListProps = {
    items: [
      {
        id: "1",
        description: "Brayan Burguer",
        billingWay: "Nubank",
        category: "Gastos",
        value: 100,
      },
      {
        id: "2",
        description: "Para o agiota",
        billingWay: "Nubank",
        category: "Empréstimos",
        value: 200,
      },
      {
        id: "3",
        description: "Aro Aro Salari",
        billingWay: "Nubank",
        category: "Recebidos",
        value: 300,
      },
      {
        id: "4",
        description: "Brayan Burguer",
        billingWay: "Nubank",
        category: "Gastos",
        value: 100,
      },
      {
        id: "5",
        description: "Para o agiota",
        billingWay: "Nubank",
        category: "Empréstimos",
        value: 200,
      },
      {
        id: "6",
        description: "Aro Aro Salari",
        billingWay: "Nubank",
        category: "Recebidos",
        value: 300,
      },
      {
        id: "7",
        description: "Brayan Burguer",
        billingWay: "Nubank",
        category: "Gastos",
        value: 100,
      },
      {
        id: "8",
        description: "Para o agiota",
        billingWay: "Nubank",
        category: "Empréstimos",
        value: 200,
      },
      {
        id: "9",
        description: "Aro Aro Salari",
        billingWay: "Nubank",
        category: "Recebidos",
        value: 300,
      },
      {
        id: "10",
        description: "Brayan Burguer",
        billingWay: "Nubank",
        category: "Gastos",
        value: 100,
      },
      {
        id: "11",
        description: "Para o agiota",
        billingWay: "Nubank",
        category: "Empréstimos",
        value: 200,
      },
      {
        id: "12",
        description: "Aro Aro Salari",
        billingWay: "Nubank",
        category: "Recebidos",
        value: 300,
      },
      {
        id: "13",
        description: "Brayan Burguer",
        billingWay: "Nubank",
        category: "Gastos",
        value: 100,
      },
      {
        id: "14",
        description: "Para o agiota",
        billingWay: "Nubank",
        category: "Empréstimos",
        value: 200,
      },
      {
        id: "15",
        description: "Aro Aro Salari",
        billingWay: "Nubank",
        category: "Recebidos",
        value: 300,
      },
      {
        id: "16",
        description: "Brayan Burguer",
        billingWay: "Nubank",
        category: "Gastos",
        value: 100,
      },
      {
        id: "17",
        description: "Para o agiota",
        billingWay: "Nubank",
        category: "Empréstimos",
        value: 200,
      },
      {
        id: "18",
        description: "Aro Aro Salari",
        billingWay: "Nubank",
        category: "Recebidos",
        value: 300,
      },
    ],
  };

  function selectDates(date: DateInputProps) {
    if (date) {
      if (dateRange.length < 2) {
        setDateRange([...dateRange, date]);
      } else {
        setDateRange([date]);
      }
    }
  }

  useEffect(() => {
    if (dateRange.length === 2) {
      let date1 = format(
        new Date(dateRange[0].year, dateRange[0].month, dateRange[0].day),
        "dd/MM"
      );
      let date2 = format(
        new Date(dateRange[1].year, dateRange[1].month, dateRange[1].day),
        "dd/MM"
      );
      setDateSelectedText(`${date1} até ${date2}`);
    }
  }, [dateRange]);

  useEffect(() => {
    if (!filterVisible) {
      setTypeFilter("");
      setDateRange([]);
    }
  }, [filterVisible]);

  return (
    <>
      {filterVisible ? (
        <FilterContainer>
          <Filter>
            <RowInputs>
              <RowInput>
                <Label>Tipo da Transação</Label>
                <TypeSelect
                  type={typeFilter}
                  onSelect={setTypeFilter}
                  defaultValue="Selecione"
                />
              </RowInput>

              <RowInput>
                <Label>Período</Label>
                <CalendarToggle
                  onPress={() => {
                    setCalendarVisible(true);
                    setDateRange([]);
                  }}
                >
                  {dateRange.length === 2 ? (
                    <CalendarToggleText>{dateSelectedText}</CalendarToggleText>
                  ) : (
                    <CalendarTogglePlaceholder>Data</CalendarTogglePlaceholder>
                  )}

                  <Modal
                    isVisible={calendarVisible}
                    onBackdropPress={() => {
                      setCalendarVisible(false);
                      setDateRange([]);
                    }}
                    statusBarTranslucent
                  >
                    <ModalContent>
                      <ModalTitle>Escolha os dias</ModalTitle>
                      <Calendar
                        allowRangeSelection
                        width={385}
                        onDateChange={(date) => {
                          let dateFormatted = date?.creationData()
                            ?.input as DateInputProps;

                          selectDates(dateFormatted);
                        }}
                      />
                      <ButtonContainer>
                        <SubmitButton
                          text="Escolher"
                          onPress={() => setCalendarVisible(false)}
                          disabled={dateRange.length < 2 ? true : false}
                          style={{ opacity: dateRange.length < 2 ? 0.5 : 1 }}
                        />
                      </ButtonContainer>
                    </ModalContent>
                  </Modal>
                </CalendarToggle>
              </RowInput>
            </RowInputs>
          </Filter>

          <FilterButtons>
            <FilterButton
              style={{ backgroundColor: theme.default.colors.red }}
              onPress={() => setFilterVisible(false)}
            >
              <FontAwesome
                name="times"
                size={30}
                color={theme.default.colors.white}
              />
            </FilterButton>

            <FilterButton
              style={{ backgroundColor: theme.default.colors.lightPrimary }}
            >
              <FontAwesome
                name="search"
                size={30}
                color={theme.default.colors.white}
              />
            </FilterButton>
          </FilterButtons>
        </FilterContainer>
      ) : (
        <FilterIconContainer>
          <FontAwesome5
            name="sliders-h"
            size={30}
            color={theme.default.colors.lightPrimary}
            onPress={() => setFilterVisible(true)}
          />
        </FilterIconContainer>
      )}
      <Container>
        <TransactionList items={items} />
        <AddButton onPress={() => navigation.navigate("TransactionValue")}>
          <Entypo name="plus" size={40} color={theme.default.colors.white} />
        </AddButton>
      </Container>
    </>
  );
}
