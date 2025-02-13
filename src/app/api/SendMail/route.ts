import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: data.email,
      to: 'info@jgruppen.se',
      subject: `Contact Form Message from ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Message: ${data.message}
      `,
      html: `
        <div style="
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        ">
          <div style="
            background-color: #4A536E;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
          ">
            <h2 style="margin: 0;">New Contact Form Message</h2>
          </div>
          
          <div style="padding: 20px; background-color: white; border-radius: 0 0 5px 5px;">
            <div style="margin-bottom: 15px;">
              <label style="font-weight: bold; color: #4A536E;">Name:</label>
              <div style="
                padding: 10px;
                background-color: #f5f5f5;
                border-radius: 5px;
                margin-top: 5px;
              ">${data.name}</div>
            </div>
            
            <div style="margin-bottom: 15px;">
              <label style="font-weight: bold; color: #4A536E;">Email:</label>
              <div style="
                padding: 10px;
                background-color: #f5f5f5;
                border-radius: 5px;
                margin-top: 5px;
              ">${data.email}</div>
            </div>
            
            <div style="margin-bottom: 15px;">
              <label style="font-weight: bold; color: #4A536E;">Phone:</label>
              <div style="
                padding: 10px;
                background-color: #f5f5f5;
                border-radius: 5px;
                margin-top: 5px;
              ">${data.phone}</div>
            </div>
            
            <div style="margin-bottom: 15px;">
              <label style="font-weight: bold; color: #4A536E;">Message:</label>
              <div style="
                padding: 10px;
                background-color: #f5f5f5;
                border-radius: 5px;
                margin-top: 5px;
                white-space: pre-wrap;
              ">${data.message}</div>
            </div>
          </div>
          
          <div style="
            text-align: center;
            padding-top: 20px;
            color: #666;
            font-size: 12px;
          ">
            <p>This is an automated message from your website contact form.</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
