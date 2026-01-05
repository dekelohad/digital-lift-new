import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({ message: 'Contact API is working' }, { status: 200 });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(request: NextRequest) {
  console.log('=== POST REQUEST RECEIVED ===');
  console.log('Method:', request.method);
  console.log('URL:', request.url);
  
  try {
    let body;
    try {
      body = await request.json();
      console.log('Body parsed successfully:', { name: body.name, email: body.email });
    } catch (parseError) {
      console.error('Failed to parse JSON:', parseError);
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }
    
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Calling EmailJS...');
    // Using EmailJS REST API directly
    const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_sswkev6',
        template_id: 'template_vpbk2x2',
        user_id: 'hYbjDz-pUlQEBgZoa',
        template_params: {
          to_name: 'Digital Lift',
          from_name: name,
          email: email,
          phone: phone || 'Not provided',
          message: message,
          reply_to: email,
        },
      }),
    });

    console.log('EmailJS response status:', emailjsResponse.status);

    if (!emailjsResponse.ok) {
      const errorText = await emailjsResponse.text();
      console.error('EmailJS error:', errorText);
      
      // If Gmail API issue, return specific error
      if (emailjsResponse.status === 412 || errorText.includes('Gmail_API')) {
        return NextResponse.json(
          { 
            error: 'Email service configuration error. The Gmail account needs to be reconnected in EmailJS dashboard.',
            details: errorText
          },
          { status: 412 }
        );
      }
      
      return NextResponse.json(
        { error: 'Failed to send email', details: errorText },
        { status: emailjsResponse.status }
      );
    }

    console.log('Email sent successfully');
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}


