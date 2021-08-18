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
import { Keyboard } from "react-native";

export default function Transactions() {
  const [filterVisible, setFilterVisible] = useState(false);

  const navigation = useNavigation();

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
        <AddButton onPress={() => navigation.navigate("TransactionValue")}>
          <Entypo name="plus" size={40} color={theme.default.colors.white} />
        </AddButton>
      </Container>
    </>
  );
}
