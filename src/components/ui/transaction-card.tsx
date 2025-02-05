import cn from "../../utils/cn";

interface ITransactionCardProps {
  icon: React.ReactNode;
  title: string;
  total: string;
  variant?: "green";
}

export function TransactionCard({
  icon,
  title,
  total,
  variant,
}: ITransactionCardProps) {
  return (
    <>
      <div
        className={cn("bg-gray-600 rounded-md p-8", {
          "bg-green-700": variant === "green",
        })}
      >
        <header className="flex items-center justify-between text-gray-300">
          <span>{title}</span>
          {icon}
        </header>

        <strong className="block mt-4 text-[2rem]">{total}</strong>
      </div>
    </>
  );
}
