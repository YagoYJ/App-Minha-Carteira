export type Transaction = {
  id: string;
  data: TransactionData;
};

export type TransactionData = {
  description: string;
  type: string;
  billingWay: string;
  value: number;
  date: {
    nanoseconds: number;
    seconds: number;
  };
};

export type DateInputProps = {
  day: number;
  month: number;
  year: number;
};
