// app/api/feedback/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/app/lib/Supabase';

export async function POST(req: Request) {
  const { name, email, feedback } = await req.json();

  if (!name || !email || !feedback) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const { error } = await supabase.from("Feedback's").insert([{ 
    user_fullname: name,
    user_email: email,
    user_feedback: feedback, }]);

  if (error) {
    console.error('Supabase insert error:', error);
    return NextResponse.json({ error: 'Failed to submit feedback' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
