import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { TableCell } from "../../components/ui/table";
import { SearchForm } from "./components/search-form";

interface ITransactionsProps {}

export function Transactions({}: ITransactionsProps) {
  return (
    <>
      <div className="">
        <Header />
        <Summary />

        <div className="w-full max-w-6xl mt-16 mx-auto mb-0 px-6">
          <SearchForm />
          <table className="w-full border-separate border-spacing-y-2 border-spacing-x-0 mt-6">
            <tbody>
              <tr>
                <TableCell width="50%">Desenvolvimento de website</TableCell>
                <TableCell variant="income">+R$ 12.000,00</TableCell>
                <TableCell>Venda</TableCell>
                <TableCell>13/02/2023</TableCell>
              </tr>
              <tr>
                <TableCell width="50%">uber</TableCell>
                <TableCell variant="outcome">-R$ 12.000,00</TableCell>
                <TableCell>Venda</TableCell>
                <TableCell>13/02/2023</TableCell>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
