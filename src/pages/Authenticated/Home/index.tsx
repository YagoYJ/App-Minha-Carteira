import React, { useEffect, useState } from "react";
import TransactionItem from "../components/TransactionItem";
import firebase from "../../../configs/firebase";

import TypeCard from "./components/TypeCard";
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
import { Transaction, TransactionData } from "../types/transactions";

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("transactions")
      .limit(3)
      .onSnapshot((query) => {
        var list: Transaction[] = [];
        query.forEach((doc) => {
          list.push({
            data: doc.data() as TransactionData,
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
          <TypeCard label="Gasto" />
          <TypeCard label="Empréstimo" />
          <TypeCard label="Recebido" />
        </Categories>
      </CategoryContainer>

      <ListContainer>
        <MainTitle>Últimas Trasações</MainTitle>

        {transactions.map((item: Transaction) => (
          <TransactionItem item={item} key={item.id} />
        ))}
      </ListContainer>
    </Container>
  );
}
