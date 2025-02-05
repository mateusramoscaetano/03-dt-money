interface INewTransactionButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function NewTransactionButton({
  label,
  ...props
}: INewTransactionButtonProps) {
  return (
    <>
      <button
        {...props}
        className="h-12 bg-green-500 border-0 font-bold rounded-md flex items-center justify-center text-white pointer hover:bg-green-700 px-6"
      >
        {label}
      </button>
    </>
  );
}
