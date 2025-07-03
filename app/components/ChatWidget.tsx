'use client'

import { useState, ChangeEvent, KeyboardEvent } from 'react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState<string>('')

//   const sendMessage = async () => {
//     if (!input.trim()) return

//     const userMessage: Message = { role: 'user', content: input }
//     setMessages(prev => [...prev, userMessage])
//     setInput('')

//     try {
//       const res = await fetch('/api/chat', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ messages: [...messages, userMessage] }),
//       })

//       const data = await res.json()
//       const replyMessage: Message = { role: 'assistant', content: data.reply }
//       setMessages(prev => [...prev, replyMessage])
//     } catch (err) {
//       console.error('Error sending message:', err)
//     }
//   }

const sendMessage = async () => {
  if (!input.trim()) return

  const userMessage: Message = { role: 'user', content: input }
  setMessages(prev => [...prev, userMessage])
  setInput('')

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: [...messages, userMessage] }),
    })

    const raw = await res.text()
    console.log('🔍 Raw response:', raw)

    if (!raw.trim()) {
      console.error('⚠️ Empty response from API')
      setMessages(prev => [...prev, { role: 'assistant', content: '⚠️ No response received.' }])
      return
    }

    const data = JSON.parse(raw)
    setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
  } catch (err) {
    console.error('❌ Failed to fetch or parse:', err)
    setMessages(prev => [...prev, { role: 'assistant', content: '⚠️ Error getting reply.' }])
  }
}


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage()
  }

  return (
    <div className="p-4 max-w-md mx-auto space-y-2">
      <div className="border p-2 h-64 overflow-y-auto bg-gray-100 rounded">
        {messages.map((msg, i) => (
          <div key={i} className={`my-1 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <div className="inline-block px-3 py-1 bg-white rounded shadow">
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
        title='Chat Form'
          type="text"
          className="flex-1 border px-2 py-1 rounded"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button className="bg-blue-500 text-white px-3 rounded" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  )
}
