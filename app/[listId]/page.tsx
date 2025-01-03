"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Settings, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import BalanceTab from "@/components/balance"
import SettlementsTab from "@/components/settlements"
import TransactionsTab from "@/components/transactions"

export default function ListDetail() {
  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-white">
      {/* Header */}
      <header className="flex justify-between items-start p-4 sticky top-0 bg-white z-10">
        <Link href="/" className="p-2 -ml-2">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <Button variant="ghost" size="icon" className="p-2 -mr-2">
          <Settings className="h-6 w-6" />
        </Button>
      </header>

      {/* Group Info */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-4">
          <Image
            src="/placeholder.svg"
            alt="Group photo"
            width={80}
            height={80}
            className="rounded-lg"
          />
          <h1 className="text-2xl font-bold text-[#1e2b4a]">JC Ping Pong 🏓</h1>
        </div>

        <div className="flex items-center gap-2 mt-4 overflow-x-auto">
          <Avatar className="w-10 h-10 border-2 border-white">
            <AvatarFallback>PV</AvatarFallback>
          </Avatar>
          {[1, 2, 3, 4].map((i) => (
            <Avatar key={i} className="w-10 h-10 border-2 border-white">
              <AvatarImage src={`/placeholder.svg?i=${i}`} />
              <AvatarFallback>U{i}</AvatarFallback>
            </Avatar>
          ))}
          <span className="text-sm text-gray-500">+12</span>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="transactions" className="w-full">
        <TabsList className="w-full justify-start h-auto p-0 bg-transparent border-b rounded-none">
          <TabsTrigger
            value="transactions"
            className="flex-1 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-[#2481cc] data-[state=active]:bg-transparent"
          >
            Transactions
          </TabsTrigger>
          <TabsTrigger
            value="balance"
            className="flex-1 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-[#2481cc] data-[state=active]:bg-transparent"
          >
            Balance
          </TabsTrigger>
          <TabsTrigger
            value="settlements"
            className="flex-1 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-[#2481cc] data-[state=active]:bg-transparent"
          >
            Settlements
          </TabsTrigger>
        </TabsList>

        <TabsContent value="transactions">
          <TransactionsTab />
        </TabsContent>

        <TabsContent value="balance">
          <BalanceTab />
        </TabsContent>

        <TabsContent value="settlements">
          <SettlementsTab />
        </TabsContent>
      </Tabs>

      {/* Floating Action Button */}
      <Button
        size="icon"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[#2481cc] hover:bg-[#2481cc]/90 shadow-lg"
      >
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  )
}
