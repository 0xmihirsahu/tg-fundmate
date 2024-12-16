import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Transaction {
  avatar: string
  title: string
  amount: string
  paidBy: string
}

interface TransactionDayProps {
  date: string
  transactions: Transaction[]
}

export default function TransactionsTab() {
  const transactionDays: TransactionDayProps[] = [
    {
      date: "Mon, Dec 09",
      transactions: [
        {
          avatar: "/placeholder.svg",
          title: "Lasagna",
          amount: "€19.30",
          paidBy: "Emiel"
        }
      ]
    },
    {
      date: "Sun, Dec 08",
      transactions: [
        {
          avatar: "/placeholder.svg",
          title: "Grote Paulaner",
          amount: "€42.50",
          paidBy: "Hadrien"
        },
        {
          avatar: "/placeholder.svg",
          title: "Little Paulaner",
          amount: "€11.00",
          paidBy: "Hadrien"
        },
        {
          avatar: "/placeholder.svg",
          title: "Eten",
          amount: "€30.44",
          paidBy: "Emiel"
        },
        {
          avatar: "SK",
          title: "Bar Benthuis",
          amount: "€36.00",
          paidBy: "Sjors"
        }
      ]
    }
  ]

  return (
    <div className="p-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search in transactions"
          className="pl-10 bg-gray-100 border-none"
        />
      </div>

      {/* Transactions List */}
      <div className="space-y-6 mt-6">
        {transactionDays.map((day, index) => (
          <TransactionDay key={index} date={day.date} transactions={day.transactions} />
        ))}
      </div>
    </div>
  )
}

function TransactionDay({ date, transactions }: TransactionDayProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-medium text-[#1e2b4a]">{date}</h2>
      <div className="space-y-4">
        {transactions.map((transaction, i) => (
          <div key={i} className="flex items-center gap-4">
            {transaction.avatar.startsWith('/') ? (
              <Avatar>
                <AvatarImage src={transaction.avatar} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            ) : (
              <Avatar>
                <AvatarFallback className="bg-purple-500 text-white">
                  {transaction.avatar}
                </AvatarFallback>
              </Avatar>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[#1e2b4a] font-medium">{transaction.title}</span>
              </div>
              <p className="text-sm text-gray-500">Paid by {transaction.paidBy}</p>
            </div>
            <span className="text-[#1e2b4a] font-medium">{transaction.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

