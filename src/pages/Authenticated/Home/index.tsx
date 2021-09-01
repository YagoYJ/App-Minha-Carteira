import React, { useEffect, useState } from "react";
import TransactionItem from "../components/TransactionItem";
import {
  TransactionItemProps,
  TransactionItemPropsData,
} from "../Transactions/components/TransactionsList";
import firebase from "../../../configs/firebase";

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

export default function Home() {
  const [transactions, setTransactions] = useState<TransactionItemProps[]>([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("transactions")
      .onSnapshot((query) => {
        var list: TransactionItemProps[] = [];
        query.forEach((doc) => {
          list.push({
            data: doc.data() as TransactionItemPropsData,
            id: doc.id,
          });
        });

        setTransactions(list);
      });
  }, []);

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
          <CategoryCard label="Gasto" />
          <CategoryCard label="Empréstimo" />
          <CategoryCard label="Recebido" />
        </Categories>
      </CategoryContainer>

      <ListContainer>
        <MainTitle>Últimas Trasações</MainTitle>

        {transactions.map((item: TransactionItemProps) => (
          <TransactionItem item={item.data} key={item.id} />
        ))}
      </ListContainer>
    </Container>
  );
}
