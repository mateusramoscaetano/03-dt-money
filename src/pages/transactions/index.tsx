import { useContext } from "react";
import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { TableCell } from "../../components/ui/table";
import { SearchForm } from "./components/search-form";
import { TransactionContext } from "../../context/trasaction-context";
import { dateFormatter, formatCurrency } from "../../utils/formatter";

export function Transactions() {
  const { transactions } = useContext(TransactionContext);

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
                      {transaction.type === "income" ? "+" : "-"}{" "}
                      {formatCurrency(transaction.price)}
                    </TableCell>
                    <TableCell>{transaction.category}</TableCell>
                    <TableCell>
                      {dateFormatter(transaction.createdAt)}
                    </TableCell>
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
