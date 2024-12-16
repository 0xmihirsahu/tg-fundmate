import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function BalanceTab() {
  const balances = [
    { name: "Berend", amount: "153.50", image: "/placeholder.svg" },
    { name: "Roy", amount: "76.51", image: "/placeholder.svg" },
    { name: "Thomas", amount: "59.00", image: "/placeholder.svg" },
    { name: "Floris Jan", amount: "43.85", initials: "FV", color: "bg-red-500" },
    { name: "Maurits", amount: "38.29", image: "/placeholder.svg" },
    { name: "Tijn", amount: "29.76", image: "/placeholder.svg" },
  ]

  return (
    <div className="space-y-4 p-4">
      <Button
        className="w-full bg-[#2481cc] hover:bg-[#2481cc]/90 text-lg py-6 rounded-xl"
      >
        Settle all balances
      </Button>

      <div className="space-y-6">
        {balances.map((balance) => (
          <div key={balance.name} className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              {balance.image ? (
                <AvatarImage src={balance.image} alt={balance.name} />
              ) : (
                <AvatarFallback className={`${balance.color} text-white`}>
                  {balance.initials}
                </AvatarFallback>
              )}
            </Avatar>
            <span className="text-xl text-[#1e2b4a] flex-1">{balance.name}</span>
            <span className="text-[#2481cc] text-xl">€{balance.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

