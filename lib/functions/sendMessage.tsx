// pages/api/sendMessage.js

import type { NextApiRequest, NextApiResponse } from "next"

interface SendMessageRequest {
  chatId: number | string
  message: string
}

export default async function handler(
  req: NextApiRequest & { body: SendMessageRequest },
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { chatId, message } = req.body

    if (!chatId || !message) {
      return res.status(400).json({ error: "chatId and message are required" })
    }

    const token = "<token>" // Replace with your bot token
    const url = `https://api.telegram.org/bot${token}/sendMessage`

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        return res.status(response.status).json({ error: data.description })
      }

      return res.status(200).json(data)
    } catch (error) {
      console.error("Error sending message:", error)
      return res.status(500).json({ error: "Failed to send message" })
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
