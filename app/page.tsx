"use client"

import {
  Plus,
  AlertCircle,
  ListStart,
  ArrowLeftRight,
  User,
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import ListItem from "@/components/ListItem"
import NavItem from "@/components/NavItem"

function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-lg font-bold">Create New Group</h2>
        <input
          type="text"
          placeholder="Group Name"
          className="border p-2 w-full"
        />
        <button
          onClick={onClose}
          className="mt-2 bg-blue-500 text-white p-2 rounded"
        >
          Create
        </button>
        <button onClick={onClose} className="mt-2 ml-2 border p-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  )
}

export default function ListsPage() {
  const [isCreateGroup, setIsCreateGroup] = useState<boolean>(false)

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 sticky top-0 bg-white z-10">
        <h1 className="text-2xl font-bold text-[#1e2b4a]">Lists</h1>
        <Button
          size="icon"
          className="rounded-full bg-[#2481cc] hover:bg-[#2481cc]/90"
          onClick={() => setIsCreateGroup(true)} // This should open the modal
        >
          <Plus className="h-5 w-5" />
        </Button>
      </header>

      <Modal isOpen={isCreateGroup} onClose={() => setIsCreateGroup(false)} />

      <main className="flex-1 p-4 space-y-4">
        {/* Alert */}
        <Alert className="bg-[#fff5e6] border-[#fff5e6]">
          <AlertCircle className="h-4 w-4 text-[#2481cc]" />
          <div>
            <AlertTitle className="text-[#1e2b4a]">
              Is your info still up-to-date?
            </AlertTitle>
            <AlertDescription className="text-gray-500">
              Please check your bank account
            </AlertDescription>
          </div>
        </Alert>

        {/* List Items */}
        <div className="space-y-4">
          <ListItem
            image="/placeholder.svg"
            title="JC Ping Pong 🏓"
            balance="-€11.97"
            description="Emiel paid €19.30 for Lasagna"
            date="Dec 9"
            isNegative
          />
          <ListItem
            image="/placeholder.svg"
            title="MAUL"
            balance="€24.10"
            description="You paid €6.40 for Drinken"
            date="Aug 15"
          />
          <ListItem
            image="/placeholder.svg"
            title="Groningen met george"
            balance="€0.00"
            description="sem settled the list"
            date="Jun 15"
          />
          <ListItem
            image="/placeholder.svg"
            title="Athens girlies ✌️😙"
            balance="€0.00"
            description="sem paid €28.99 for Verrekenen"
            date="Mar 6"
          />
          <ListItem
            image="/placeholder.svg"
            title="Violet"
            balance="€13.39"
            description="Laurens paid €2.30 for Toiletpaper"
            date="Feb 7"
          />
          <ListItem
            image="/placeholder.svg"
            title="PIN Group"
            balance="€0.00"
            description="No recent activity"
            date=""
          />
        </div>
      </main>

      {/* Bottom Navigation*/}
      <nav className="flex justify-around items-center p-4 border-t bg-white">
        <NavItem
          icon={<ListStart className="w-5 h-5" />}
          label="Lists"
          active
        />
        <NavItem
          icon={<ArrowLeftRight className="w-5 h-5" />}
          label="Payments"
        />
        <NavItem icon={<User className="w-5 h-5" />} label="Account" />
      </nav>
    </div>
  )
}
