// app/api/feedbackextended/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/app/lib/Supabase';

export async function POST(req: Request) {
  const {
    name,
    email,
    feedback,
    overallRating,
    devRating,
    designRating,
    bugExperience
  } = await req.json();

  // Validate required fields
  if (!name || !email || !feedback || !overallRating || !devRating || !designRating) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { error } = await supabase.from("Feedback's").insert([{
    user_fullname: name,
    user_email: email,
    user_feedback: feedback,
    bug_experience: bugExperience,
    overall_rating: overallRating,
    developer_rating: devRating,
    design_rating: designRating,
    
  }]);

  if (error) {
    console.error('Supabase insert error:', error);
    return NextResponse.json({ error: 'Failed to submit extended feedback' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
