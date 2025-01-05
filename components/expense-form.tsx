import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { X } from 'lucide-react'
import { useState } from 'react';

interface ExpenseFormProps {
  onClose: () => void
}

export function ExpenseForm({ onClose }: ExpenseFormProps) {
  const [amount, setAmount] = useState<string>('0')
  const users = [
    { id: 'you', name: 'You' },
    { id: 'filip', name: 'Filip Laurentiu' },
    { id: 'paul', name: 'Paul' }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-end mb-4">
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-xl">
        <div className="bg-gray-950 p-3 rounded-xl">
          <span className="text-white text-xl">You</span>
        </div>
        <span className="text-white text-xl">→</span>
        <div className="bg-gray-950 p-3 rounded-xl">
          <span className="text-white text-xl">Group</span>
        </div>
      </div>

      <div className="bg-gray-900 p-4 rounded-xl">
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="text-5xl text-white mb-8 bg-transparent border-none text-center"
          placeholder="0"
        />
        <div className="text-gray-400 text-2xl">What did You pay for?</div>
      </div>

      <div className="bg-gray-900 p-4 rounded-xl space-y-4">
        <div className="text-gray-400">Split among:</div>
        
        {users.map(user => (
          <div key={user.id} className="flex items-center justify-between bg-gray-950 p-4 rounded-xl">
            <div className="space-y-1">
              <div className="text-white">{user.name}</div>
              <div className="text-gray-500">covers own split part )</div>
            </div>
            <Checkbox defaultChecked />
          </div>
        ))}

        <div className="text-gray-500 text-sm">
          Missing someone?
          <br />
          If there are users not displayed here (but they are in the group), ask them to write
        </div>
      </div>

      <div className="fixed bottom-4 left-4 right-4 max-w-lg mx-auto">
        <Button 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-lg"
          onClick={() => {
            // Here you would typically handle the expense submission
            console.log('Expense added:', amount)
            onClose()
          }}
        >
          ADD EXPENSE
        </Button>
      </div>
    </div>
  )
}

