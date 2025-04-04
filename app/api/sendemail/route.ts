import { NextResponse } from 'next/server';
import emailjs from '@emailjs/browser';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    const templateParams = {
      name,
      email,
      phone,
      service,
      message,
    };

    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    if (result.text === 'OK') {
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    }

    throw new Error('Failed to send email');
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}