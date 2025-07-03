// // // pages/api/chat.ts

// // export default async function handler(req, res) {
// //   const { messages } = req.body

// //   const response = await fetch('https://api.openai.com/v1/chat/completions', {
// //     method: 'POST',
// //     headers: {
// //       'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
// //       'Content-Type': 'application/json',
// //     },
// //     body: JSON.stringify({
// //       model: 'gpt-3.5-turbo',
// //       messages,
// //     }),
// //   })

// //   const data = await response.json()
// //   const reply = data.choices[0]?.message?.content
// //   res.status(200).json({ reply })
// // }


// // pages/api/chat.ts

// import type { NextApiRequest, NextApiResponse } from 'next'

// type Message = {
//   role: 'user' | 'assistant' | 'system'
//   content: string
// }

// type ChatRequestBody = {
//   messages: Message[]
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { messages } = req.body as ChatRequestBody

//   try {
//     const response = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         model: 'gpt-3.5-turbo',
//         messages,
//       }),
//     })

//     const data = await response.json()
//     const reply = data.choices[0]?.message?.content || 'No response.'

//     res.status(200).json({ reply })
//   } catch (error) {
//     console.error('Error calling OpenAI API:', error)
//     res.status(500).json({ reply: 'Something went wrong.' })
//   }
// }



