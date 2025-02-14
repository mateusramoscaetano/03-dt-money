import { TransactionProvider } from "./context/trasaction-context";
import { Transactions } from "./pages/transactions";

export function App() {
  return (
    <>
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </>
  );
}
