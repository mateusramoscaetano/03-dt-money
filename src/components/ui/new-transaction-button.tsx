import { forwardRef } from "react";

type TNewTransactionButtonProps = React.ComponentProps<"button"> & {
  label: string;
};

export const NewTransactionButton = forwardRef<
  HTMLButtonElement,
  TNewTransactionButtonProps
>(({ label, ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className="h-12 bg-green-500 border-0 font-bold rounded-md flex items-center justify-center text-white pointer hover:bg-green-700 px-6"
    >
      {label}
    </button>
  );
});

NewTransactionButton.displayName = "NewTransactionButton";
