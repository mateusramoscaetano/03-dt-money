import { MagnifyingGlass } from "phosphor-react";

interface ISearchFormProps {}

export function SearchForm({}: ISearchFormProps) {
  return (
    <>
      <form className="flex gap-4 ">
        <input
          placeholder="Busque por transações"
          className="flex-1 rounded-md border-0 bg-gray-900 p-4 placeholder:text-gray-500 text-gray-300 "
        />
        <button
          className="flex items-center gap-3 border-[1px] border-green-300 text-green-300 font-bold 
        rounded-md bg-transparent  p-4 hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors duration-200"
        >
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </form>
    </>
  );
}
