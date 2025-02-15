import { useCallback, useEffect, useState } from "react";
import {
  TransactionContext,
  type ITransaction,
  type TCreateTransaction,
} from "./transaction-context";
import { api } from "../axios";

interface TransactionProviderType {
  children: React.ReactNode;
}

export function TransactionProvider({ children }: TransactionProviderType) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const loadTransactions = useCallback(async (query?: string) => {
    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });

    const data = await response.data;

    setTransactions(data);
  }, []);

  const createTransaction = useCallback(async (data: TCreateTransaction) => {
    const { category, description, price, type } = data;

    const response = await api.post("transactions", {
      category,
      description,
      price,
      type,
      createdAt: new Date(),
    });

    setTransactions((state) => [...state, response.data]);
  }, []);

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        fetchTransactions: loadTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
