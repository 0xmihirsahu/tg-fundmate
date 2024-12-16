import Image from "next/image"
import { Card } from "./ui/card"
export default function ListItem({
  image,
  title,
  balance,
  description,
  date,
  isNegative = false,
}: {
  image: string
  title: string
  balance: string
  description: string
  date: string
  isNegative?: boolean
}) {
  return (
    <Card className="p-4 flex items-start space-x-4">
      <Image
        src={image}
        alt=""
        width={48}
        height={48}
        className="rounded-lg object-cover"
      />
      <div className="flex-1 min-w-0">
        <h2 className="text-lg font-semibold text-[#1e2b4a]">{title}</h2>
        <p className="text-base font-semibold text-[#1e2b4a]">
          My balance: <span className={isNegative ? "text-red-500" : "text-[#2481cc]"}>{balance}</span>
        </p>
        <p className="text-gray-500 text-sm truncate">{description}</p>
      </div>
      {date && <span className="text-gray-500 text-sm whitespace-nowrap">{date}</span>}
    </Card>
  )
}