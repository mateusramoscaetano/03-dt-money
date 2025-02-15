import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { TransactionContext } from '../../../context/transaction-context'
import { useContext } from 'react'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
    },
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSearchTransactions)}
        className="flex gap-4 "
      >
        <input
          placeholder="Busque por transações"
          className="flex-1 rounded-md border-0 bg-gray-900 p-4 placeholder:text-gray-500 text-gray-300 "
          {...register('query')}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center gap-3 border-[1px] border-green-300 text-green-300 font-bold disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-green-300
        rounded-md bg-transparent  p-4 hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors duration-200"
        >
          {isSubmitting ? (
            <div className="rounded-full animate-spin border-2 border-white   w-4 h-4"></div>
          ) : (
            <div className="flex items-center gap-3">
              <MagnifyingGlass size={20} />
              Buscar
            </div>
          )}
        </button>
      </form>
    </>
  )
}
