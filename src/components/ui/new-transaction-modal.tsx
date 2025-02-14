import * as Dialog from "@radix-ui/react-dialog";
import * as Radio from "@radix-ui/react-radio-group";
import { ArrowCircleUp, X } from "phosphor-react";

import cn from "../../utils/cn";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
    control,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      description: "",
      price: 0,
      category: "",
      type: "income",
    },
  });

  function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    console.log(data);
  }

  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
        <Dialog.Content className="min-w-[32rem] bg-gray-800 py-10 px-12 rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-y-3">
          <Dialog.Title className="text-white font-bold text-[1.25rem]">
            Nova Transação
          </Dialog.Title>
          <Dialog.DialogDescription className="text-gray-300 text-sm">
            Preencha os campos abaixo para criar uma nova transação.
          </Dialog.DialogDescription>

          <form
            onSubmit={handleSubmit(handleCreateNewTransaction)}
            className="flex flex-col mt-8 gap-4"
          >
            <input
              className="rounded-md border-0 bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
              type="text"
              placeholder="Descrição"
              required
              {...register("description")}
            />
            <input
              className="rounded-md border-0 bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
              type="text"
              placeholder="Preço"
              required
              {...register("price", { valueAsNumber: true })}
            />
            <input
              className="rounded-md border-0 bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
              type="text"
              placeholder="Categoria"
              required
              {...register("category")}
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <Radio.Root
                    className="grid grid-cols-2 gap-4 mt-2 focus:outline-none"
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <TransactionTypeButton
                      variant="income"
                      label="Entrada"
                      value="income"
                    />
                    <TransactionTypeButton
                      variant="outcome"
                      label="Saída"
                      value="outcome"
                    />
                  </Radio.Root>
                );
              }}
            />
            <button
              className="h-[58px] border-0 bg-green-500 text-white font-bold rounded-md px-5 mt-6
            cursor-pointer hover:bg-green-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              Cadastrar
            </button>
          </form>
          <Dialog.Close className="absolute bg-transparent border-0 leading-0 cursor-pointer top-6 right-6 text-zinc-500 hover:text-zinc-100">
            <X />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </>
  );
}

interface ITransactionTypeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "income" | "outcome";
  label: string;
  value: string;
}

export function TransactionTypeButton({
  label,
  variant,
  value,
  ...props
}: ITransactionTypeButtonProps) {
  return (
    <Radio.Item value={value} asChild>
      <button
        type="button"
        {...props}
        className={cn(
          "group bg-gray-700 rounded-md p-4 flex items-center justify-center gap-2 text-gray-300 border-0 cursor-pointer hover:bg-gray-600 transition-colors",
          {
            "focus:ring-2 focus:bg-green-500 focus:ring-offset-2 focus:text-white":
              variant === "income",
            "focus:bg-red-500 focus:ring-offset-2 focus:text-white":
              variant === "outcome",
          }
        )}
      >
        <ArrowCircleUp
          size={24}
          className={cn(" group-focus:text-white", {
            "text-green-300 ": variant === "income",
            "text-red-300  rotate-180 ": variant === "outcome",
          })}
        />
        {label}
      </button>
    </Radio.Item>
  );
}
