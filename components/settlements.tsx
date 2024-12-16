import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Settlement {
  date: string
  spentByMe: string
  totalSpent: string
  balance: number
  status: 'owed' | 'owe'
}

export default function SettlementsTab() {
  const settlements: Settlement[] = [
    {
      date: "8/9/2024",
      spentByMe: "193.55",
      totalSpent: "304.43",
      balance: 41.34,
      status: 'owed'
    },
    {
      date: "1/7/2024",
      spentByMe: "397.40",
      totalSpent: "798.50",
      balance: 6.84,
      status: 'owe'
    },
    {
      date: "7/15/2023",
      spentByMe: "312.90",
      totalSpent: "466.19",
      balance: 73.05,
      status: 'owed'
    },
    {
      date: "7/7/2023",
      spentByMe: "226.20",
      totalSpent: "298.05",
      balance: 0,
      status: 'owed'
    }
  ]

  return (
    <div className="space-y-4 p-4">
      {settlements.map((settlement, index) => (
        <div key={index} className="flex gap-2">
          <div className="pt-6">
            <div className="w-2 h-2 rounded-full bg-[#2481cc]" />
          </div>
          <Card className="flex-1 p-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-medium text-[#1e2b4a]">MAUL</h3>
              <span className="text-gray-500">{settlement.date}</span>
            </div>

            <div className="space-y-1 mb-4">
              <div className="flex justify-between text-gray-500">
                <span>Spent by me:</span>
                <span>€{settlement.spentByMe}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Total spent:</span>
                <span>€{settlement.totalSpent}</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-[#1e2b4a]">
                {settlement.status === 'owed' ? 'You are owed ' : 'You owe '}
                <span className={settlement.status === 'owed' ? 'text-[#2481cc]' : 'text-[#ff7043]'}>
                  €{settlement.balance.toFixed(2)}
                </span>
              </p>
              {settlement.balance > 0 && (
                <Button
                  className={
                    settlement.status === 'owed'
                      ? 'bg-[#2481cc] hover:bg-[#2481cc]/90'
                      : 'bg-[#ff7043] hover:bg-[#ff7043]/90'
                  }
                >
                  {settlement.status === 'owed' ? 'Request' : 'Pay'}
                </Button>
              )}
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}

