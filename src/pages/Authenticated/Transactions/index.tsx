import React, { useState } from "react";
import { Entypo, FontAwesome5, FontAwesome } from "@expo/vector-icons";

import {
  AddButton,
  Container,
  Filter,
  FilterButton,
  FilterButtons,
  FilterContainer,
  FilterIconContainer,
  Input,
  Label,
  RowInput,
  RowInputs,
} from "./styles";
import { theme } from "../../../theme";
import { useNavigation } from "@react-navigation/native";
import TransactionList, {
  TransactionListProps,
} from "./components/TransactionsList";

export default function Transactions() {
  const [filterVisible, setFilterVisible] = useState(false);

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

  return (
    <>
      {filterVisible ? (
        <FilterContainer>
          <Filter>
            <Input
              placeholder="Tipo de Transação"
              placeholderTextColor={theme.default.colors.gray}
            />
            <RowInputs>
              <RowInput>
                <Label>De</Label>
                <Input
                  placeholder="Data"
                  placeholderTextColor={theme.default.colors.gray}
                />
              </RowInput>

              <RowInput>
                <Label>Até</Label>
                <Input
                  placeholder="Data"
                  placeholderTextColor={theme.default.colors.gray}
                />
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
