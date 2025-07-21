// File: src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    console.log('Received data:', data); // Debug-Log
    
    if (!data.name || !data.email || data.consent !== true) {
      console.log('Validation failed:', {
        hasName: !!data.name,
        hasEmail: !!data.email,
        consentValue: data.consent,
        consentType: typeof data.consent
      });
      return NextResponse.json(
        { message: 'Erforderliche Felder fehlen' },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD || !process.env.EMAIL_RECIPIENT) {
      console.error('Email environment variables not set');
      return NextResponse.json(
        { message: 'Server-Konfigurationsfehler' },
        { status: 500 }
      );
    }

    // Configure mail transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: 'Neue Kontaktanfrage von der Zwiegespräch Theater Website',
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Telefon: ${data.phone || 'Nicht angegeben'}
        
        Nachricht:
        ${data.message || 'Keine Nachricht angegeben'}
        
        Datenschutzerklärung akzeptiert: ${data.consent ? 'Ja' : 'Nein'}
      `,
      html: `
        <h2>Neue Kontaktanfrage von der Website</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone || 'Nicht angegeben'}</p>
        
        <h3>Nachricht:</h3>
        <p>${data.message || 'Keine Nachricht angegeben'}</p>
        
        <p><strong>Datenschutzerklärung akzeptiert:</strong> ${data.consent ? 'Ja' : 'Nein'}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email erfolgreich gesendet' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'E-Mail konnte nicht gesendet werden' },
      { status: 500 }
    );
  }
}