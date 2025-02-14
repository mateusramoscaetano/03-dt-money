import { createContext } from "react";

export interface ITransaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

interface ITransactionContext {
  transactions: ITransaction[];
}

export const TransactionContext = createContext({} as ITransactionContext);
