import React from "react";
import { theme } from "../../../theme";
import CategoryCard from "./components/CategoryCard";
import {
  Card,
  Categories,
  CategoryContainer,
  CategoryTitle,
  Container,
  Header,
  SubTitle,
  Title,
  TitleTexts,
  TopHeader,
  TotalValue,
  TotalValueTextGreen,
  Value,
  Values,
  ValueSubTitleGreen,
  ValueSubTitleRed,
  ValueTitleGreen,
  ValueTitleRed,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <Header>
        <TopHeader>
          <TitleTexts>
            <Title>Saldo atual</Title>
            <SubTitle>R$ 1.000,00</SubTitle>
          </TitleTexts>
        </TopHeader>

        <Card>
          <Values>
            <Value>
              <ValueTitleGreen>Entradas</ValueTitleGreen>
              <ValueSubTitleGreen>R$ 1.200,00</ValueSubTitleGreen>
            </Value>
            <Value>
              <ValueTitleRed>Saídas</ValueTitleRed>
              <ValueSubTitleRed>R$ 1.100,00</ValueSubTitleRed>
            </Value>
          </Values>

          <TotalValue>
            <TotalValueTextGreen>
              Você tem R$ 100,00 de lucro
            </TotalValueTextGreen>
          </TotalValue>
        </Card>
      </Header>

      <CategoryContainer>
        <CategoryTitle>Categorias</CategoryTitle>
        <Categories>
          <CategoryCard label="Gastos" />
          <CategoryCard label="Empréstimos" />
          <CategoryCard label="Recebidos" />
        </Categories>
      </CategoryContainer>
    </Container>
  );
}
