// app/api/service-request/route.ts ✅ FIXED

import { NextResponse } from 'next/server';
import { supabase } from '@/lib/Supabase';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, service, message } = body;

  if (!name || !email || !service || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  const { error } = await supabase.from('service_request').insert([
    {
      fullname: name,
      email,
      service,
      description: message,
    },
  ]);

  if (error) {
    console.error('Supabase error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: 'Service request submitted successfully!' }, { status: 200 });
}
