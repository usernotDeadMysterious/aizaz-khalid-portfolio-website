

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
