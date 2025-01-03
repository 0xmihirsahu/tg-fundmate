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

interface GroupType {
  // Define GroupType
  id: number
  name: string
}

function Modal({
  isOpen,
  onClose,
  onCreate,
}: {
  isOpen: boolean
  onClose: () => void
  onCreate: (groupName: string) => void
}) {
  const [groupName, setGroupName] = useState<string>("") // State for group name

  if (!isOpen) return null

  const handleCreate = () => {
    if (groupName.trim()) {
      onCreate(groupName) // Call the onCreate function with the group name
      setGroupName("") // Clear the input field
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-lg font-bold">Create New Group</h2>
        <input
          type="text"
          placeholder="Group Name"
          className="border p-2 w-full"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)} // Update state on input change
        />
        <button
          onClick={handleCreate}
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
  const [groups, setGroups] = useState<GroupType[]>([]) // Define GroupType according to your data structure

  const handleCreateGroup = (groupName: string) => {
    const newGroup = { id: Date.now(), name: groupName } // Create a new group object
    setGroups([...groups, newGroup]) // Update the state with the new group
    setIsCreateGroup(false) // Close the modal
  }

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

      <Modal
        isOpen={isCreateGroup}
        onClose={() => setIsCreateGroup(false)}
        onCreate={handleCreateGroup}
      />

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
          {groups.map(
            (
              group // Render ListItems based on groups
            ) => (
              <ListItem
                key={group.id}
                image="/placeholder.svg"
                title={group.name} // Use group name as title
                balance="€0.00" // Placeholder balance
                description="No recent activity" // Placeholder description
                date="" // Placeholder date
              />
            )
          )}
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
