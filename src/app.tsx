import { TransactionProvider } from './context/transaction-provider'
import { Transactions } from './pages/transactions'

export function App() {
  return (
    <>
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </>
  )
}
