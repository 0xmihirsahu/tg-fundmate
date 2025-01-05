'use client'

import { useState } from 'react'
import { TransactionList } from '@/components/transaction-list'
import { ExpenseForm } from '@/components/expense-form'
import { Button } from "@/components/ui/button"

export default function ExpenseTracker() {
  const [showExpenseForm, setShowExpenseForm] = useState(false)
  
  const transactions = [
    {
      id: 1,
      from: 'You',
      to: 'Filip',
      description: 'Filip Laurentiu',
      amount: 16.67,
      type: 'debt'
    },
    {
      id: 2,
      from: 'Paul',
      to: 'Filip',
      description: 'Filip Laurentiu',
      amount: 66.66,
      type: 'debt'
    },
    {
      id: 3,
      date: 'Jan 4',
      from: 'Filip',
      description: 'For my funeral',
      splitAmong: ['Filip Laurentiu', 'You', 'Paul'],
      amount: 100,
      type: 'expense'
    },
    {
      id: 4,
      from: 'You',
      description: 'Pizza',
      splitAmong: ['You', 'Filip Laurentiu', 'Paul'],
      amount: 50,
      type: 'expense'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-950">
      <main className="flex-1 container max-w-lg mx-auto p-4">
        {showExpenseForm ? (
          <ExpenseForm onClose={() => setShowExpenseForm(false)} />
        ) : (
          <>
            <TransactionList transactions={transactions} />
            <div className="fixed bottom-4 left-4 right-4 max-w-lg mx-auto">
              <Button 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-lg"
                onClick={() => setShowExpenseForm(true)}
              >
                ADD PAYMENT
              </Button>
            </div>
          </>
        )}
      </main>
    </div>
  )
}

