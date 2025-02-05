import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { TransactionCard } from "./ui/transaction-card";

interface ISummaryProps {}

export function Summary({}: ISummaryProps) {
  return (
    <>
      <section className="w-full max-w-6xl mx-auto px-6 items-center justify-between grid grid-cols-3 gap-8 mt-[-5rem]">
        <TransactionCard
          icon={<ArrowCircleUp size={32} color="#03ac0e" />}
          title="Entradas"
          total="R$ 17.400,00"
        />
        <TransactionCard
          icon={<ArrowCircleDown size={32} color="#e62e4d" />}
          title="Saidas"
          total="R$ 1.259,00"
        />
        <TransactionCard
          icon={<CurrencyDollar size={32} color="#fff" />}
          title="Total"
          total="R$ 16.141,00"
          variant="green"
        />
      </section>
    </>
  );
}
