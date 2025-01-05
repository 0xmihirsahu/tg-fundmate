import { Zap } from 'lucide-react'

interface Transaction {
  id: number
  from: string
  to?: string
  description: string
  amount: number
  type: string
  date?: string
  splitAmong?: string[]
}

interface TransactionListProps {
  transactions: Transaction[]
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="space-y-4">
      {transactions.map(transaction => (
        <div key={transaction.id}>
          {transaction.date && (
            <div className="bg-gray-900 text-gray-400 text-sm py-1 px-3 rounded-full inline-block mb-2">
              {transaction.date}
            </div>
          )}
          
          <div className="bg-gray-900 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {transaction.type === 'expense' && (
                  <Zap className="w-5 h-5 text-yellow-500" />
                )}
                <span className="text-white text-lg">
                  {transaction.from} {transaction.to ? `→ ${transaction.to}` : ''}
                </span>
              </div>
              <span className={`text-2xl ${
                transaction.type === 'expense' 
                  ? 'text-green-500' 
                  : 'text-red-400'
              }`}>
                {transaction.amount}
              </span>
            </div>
            
            <div className="text-gray-400">
              {transaction.type === 'debt' 
                ? `${transaction.from} owes ${transaction.description}`
                : `${transaction.from} paid for ${transaction.description}. Split among: ${
                    transaction.splitAmong?.join(', ')
                  }`
              }
              {transaction.splitAmong?.includes('edited') && ' (edited)'}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

