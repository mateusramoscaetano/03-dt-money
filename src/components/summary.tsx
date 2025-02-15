import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { TransactionCard } from './ui/transaction-card'
import { formatCurrency } from '../utils/formatter'
import { useSummary } from '../hooks/use-summary'

export function Summary() {
  const summary = useSummary()

  return (
    <>
      <section className="w-full max-w-6xl mx-auto px-6 items-center justify-between grid grid-cols-3 gap-8 mt-[-5rem]">
        <TransactionCard
          icon={<ArrowCircleUp size={32} color="#03ac0e" />}
          title="Entradas"
          total={formatCurrency(summary.income)}
        />
        <TransactionCard
          icon={<ArrowCircleDown size={32} color="#e62e4d" />}
          title="Saidas"
          total={formatCurrency(summary.outcome)}
        />
        <TransactionCard
          icon={<CurrencyDollar size={32} color="#fff" />}
          title="Total"
          total={formatCurrency(summary.total)}
          variant="green"
        />
      </section>
    </>
  )
}
