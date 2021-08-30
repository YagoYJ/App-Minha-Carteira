import React from "react";
import TransactionItem from "../components/TransactionItem";
import { TransactionItemProps } from "../Transactions/components/TransactionsList";

import CategoryCard from "./components/CategoryCard";
import {
  Card,
  Categories,
  CategoryContainer,
  MainTitle,
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
  ListContainer,
} from "./styles";

const items = [
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
];

export default function Home() {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header>
        <TopHeader>
          <TitleTexts>
            <Title>Saldo atual</Title>
            <SubTitle>R$ 1.000,00</SubTitle>
          </TitleTexts>
        </TopHeader>

        <Card style={{ elevation: 8 }}>
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
        <MainTitle>Categorias</MainTitle>
        <Categories>
          <CategoryCard label="Gastos" />
          <CategoryCard label="Empréstimos" />
          <CategoryCard label="Recebidos" />
        </Categories>
      </CategoryContainer>

      <ListContainer>
        <MainTitle>Últimas Trasações</MainTitle>

        {items.map((item: TransactionItemProps) => (
          <TransactionItem item={item} key={item.id} />
        ))}
      </ListContainer>
    </Container>
  );
}
