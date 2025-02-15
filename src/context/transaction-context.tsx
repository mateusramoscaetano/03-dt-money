import { createContext } from 'react'

export interface ITransaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

export type TCreateTransaction = Omit<ITransaction, 'id' | 'createdAt'>

interface ITransactionContext {
  transactions: ITransaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (transaction: TCreateTransaction) => Promise<void>
}

export const TransactionContext = createContext({} as ITransactionContext)
