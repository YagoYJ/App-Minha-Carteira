export type Transaction = {
  id: string;
  data: TransactionData;
};

export type TransactionData = {
  description: string;
  type: string;
  payment: string;
  value: number;
  date: string;
};

export type DateInputProps = {
  day: number;
  month: number;
  year: number;
};
