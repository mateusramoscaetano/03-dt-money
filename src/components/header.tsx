import logo from '../assets/logo.svg'
import { NewTransactionButton } from './ui/new-transaction-button'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from './ui/new-transaction-modal'

export function Header() {
  return (
    <>
      <header className="bg-gray-900  pt-10 px-0 pb-30 flex items-start justify-center">
        <div className="w-full max-w-6xl mx-auto px-6 flex items-center justify-between">
          <img src={logo} alt="" />
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton label="Nova transação" />
            </Dialog.Trigger>
            <NewTransactionModal />
          </Dialog.Root>
        </div>
      </header>
    </>
  )
}
