import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { TableCell } from "../../components/ui/table";
import { SearchForm } from "./components/search-form";

interface ITransaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

export function Transactions() {
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
    <>
      <div className="">
        <Header />
        <Summary />

        <div className="w-full max-w-6xl mt-16 mx-auto mb-0 px-6">
          <SearchForm />
          <table className="w-full border-separate border-spacing-y-2 border-spacing-x-0 mt-6">
            <tbody>
              {transactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <TableCell width="50%">{transaction.description}</TableCell>
                    <TableCell variant={transaction.type}>
                      +R$ {transaction.price}
                    </TableCell>
                    <TableCell>{transaction.category}</TableCell>
                    <TableCell>{transaction.createdAt}</TableCell>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
