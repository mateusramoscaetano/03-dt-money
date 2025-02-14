import { createContext, useEffect, useState } from "react";

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

interface TransactionProviderType {
  children: React.ReactNode;
}

export function TransactionProvider({ children }: TransactionProviderType) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  async function loadTransactions() {
    const response = await fetch("http://localhost:3000/transactions");

    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, [transactions]);

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  );
}
