// // // import type { NextApiRequest, NextApiResponse } from 'next'

// // // type Message = {
// // //   role: 'user' | 'assistant' | 'system'
// // //   content: string
// // // }

// // // type ChatRequestBody = {
// // //   messages: Message[]
// // // }

// // // export default async function handler(
// // //   req: NextApiRequest,
// // //   res: NextApiResponse
// // // ) {
// // //   const { messages } = req.body as ChatRequestBody

// // //   if (!process.env.OPENAI_API_KEY) {
// // //     return res.status(500).json({ reply: 'Missing OpenAI API key.' })
// // //   }

// // //   try {
// // //     const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
// // //       method: 'POST',
// // //       headers: {
// // //         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
// // //         'Content-Type': 'application/json',
// // //       },
// // //       body: JSON.stringify({
// // //         model: 'gpt-3.5-turbo',
// // //         messages,
// // //       }),
// // //     })

// // //     // Handle non-200 response from OpenAI
// // //     if (!openaiRes.ok) {
// // //       const errorText = await openaiRes.text()
// // //       console.error('OpenAI error:', errorText)
// // //       return res.status(500).json({ reply: 'Failed to fetch response from OpenAI.' })
// // //     }

// // //     // Safe parse
// // //     const data = await openaiRes.json()

// // //     const reply = data.choices?.[0]?.message?.content ?? 'No response from model.'

// // //     return res.status(200).json({ reply })
// // //   } catch (error) {
// // //     console.error('API Route Error:', error)
// // //     return res.status(500).json({ reply: 'Something went wrong while processing your request.' })
// // //   }
// // // }



// // import type { NextApiRequest, NextApiResponse } from 'next'

// // type Message = {
// //   role: 'user' | 'assistant' | 'system'
// //   content: string
// // }

// // type ChatRequestBody = {
// //   messages: Message[]
// // }

// // export default async function handler(
// //   req: NextApiRequest,
// //   res: NextApiResponse
// // ) {
// //   const { messages } = req.body as ChatRequestBody

// //   // 🔒 Basic validation
// //   if (!messages || !Array.isArray(messages)) {
// //     console.error('❌ Invalid request body:', req.body)
// //     return res.status(400).json({ reply: 'Invalid request body.' })
// //   }

// //   if (!process.env.OPENAI_API_KEY) {
// //     console.error('❌ Missing OpenAI API key')
// //     return res.status(500).json({ reply: 'Server misconfiguration.' })
// //   }

// //   try {
// //     const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
// //       method: 'POST',
// //       headers: {
// //         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({
// //         model: 'gpt-3.5-turbo',
// //         messages,
// //       }),
// //     })

// //     // 🔍 Log what OpenAI returns
// //     const raw = await openaiRes.text()
// //     console.log('🧠 OpenAI raw response:', raw)

// //     if (!openaiRes.ok) {
// //       console.error('⚠️ OpenAI responded with error')
// //       return res.status(500).json({ reply: 'OpenAI error response.' })
// //     }

// //     // ✅ Parse only if it's good
// //     const data = JSON.parse(raw)
// //     const reply = data.choices?.[0]?.message?.content ?? '🤖 No reply from model.'

// //     return res.status(200).json({ reply })
// //   } catch (err) {
// //     console.error('❌ API Error:', err)
// //     return res.status(500).json({ reply: 'Unexpected server error.' })
// //   }
// // }



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

//   if (!process.env.OPENAI_API_KEY) {
//     console.error('❌ Missing OpenAI API key')
//     return res.status(500).json({ reply: 'Server misconfiguration: No API key.' })
//   }

//   if (!messages || !Array.isArray(messages)) {
//     console.error('❌ Invalid request body:', req.body)
//     return res.status(400).json({ reply: 'Invalid request body.' })
//   }

//   try {
//     const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         model: 'gpt-3.5-turbo',
//         messages,
//       }),
//     })

//     const raw = await openaiRes.text()
//     console.log('🧠 OpenAI raw response:', raw)

//     if (!openaiRes.ok) {
//       console.error('❌ OpenAI error:', raw)
//       return res.status(500).json({ reply: `OpenAI error: ${raw}` })
//     }

//     const data = JSON.parse(raw)
//     const reply = data.choices?.[0]?.message?.content ?? '🤖 No reply from model.'

//     return res.status(200).json({ reply })
//   } catch (error) {
//     console.error('❌ Unexpected server error:', error)
//     return res.status(500).json({ reply: 'Internal server error.' })
//   }
// }



import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  const body = await req.json()

  const messages = body.messages

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ reply: 'Server misconfiguration.' }, { status: 500 })
  }

  if (!messages || !Array.isArray(messages)) {
    return NextResponse.json({ reply: 'Invalid request body.' }, { status: 400 })
  }

  try {
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages,
      }),
    })

    const raw = await openaiRes.text()
    console.log('🧠 OpenAI raw response:', raw)

    if (!openaiRes.ok) {
      return NextResponse.json({ reply: `OpenAI error: ${raw}` }, { status: 500 })
    }

    const data = JSON.parse(raw)
    const reply = data.choices?.[0]?.message?.content ?? '🤖 No reply from model.'

    return NextResponse.json({ reply })
  } catch (err) {
    console.error('❌ API error:', err)
    return NextResponse.json({ reply: 'Unexpected server error.' }, { status: 500 })
  }
}
