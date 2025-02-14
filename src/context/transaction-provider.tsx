import { useEffect, useState } from "react";
import { TransactionContext, type ITransaction } from "./trasaction-context";

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
