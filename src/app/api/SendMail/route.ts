import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    // Parse incoming JSON
    const { formData } = await request.json();
    if (!formData) {
      return NextResponse.json({ error: "No formData provided" }, { status: 400 });
    }

    const { email, name, phone, address, subject, message, business_type } = formData;
    console.log("Received formData:", formData);

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: "Missing EMAIL_USER or EMAIL_PASS in environment" },
        { status: 500 }
      );
    }

    // Create transporter with Gmail service
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // e.g. "wazirmk67@gmail.com"
        pass: process.env.EMAIL_PASS, // your 16-char app password with NO SPACES
      },
    });

    // Construct email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: subject || "Ny förfrågan från JGruppen webbplats",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #f8f9fa;
                padding: 15px;
                border-radius: 5px;
                margin-bottom: 20px;
              }
              .content {
                background-color: #ffffff;
                padding: 20px;
                border-radius: 5px;
                border: 1px solid #e9ecef;
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: bold;
                color: #495057;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h2 style="margin:0;color:#1a73e8;">Ny Kontaktförfrågan - JGruppen</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Företagstyp:</span> ${business_type || "Ej angivet"}
              </div>
              <div class="field">
                <span class="label">Namn:</span> ${name || "Ej angivet"}
              </div>
              <div class="field">
                <span class="label">E-post:</span> ${email || "Ej angivet"}
              </div>
              <div class="field">
                <span class="label">Telefon:</span> ${phone || "Ej angivet"}
              </div>
              <div class="field">
                <span class="label">Adress:</span> ${address || "Ej angivet"}
              </div>
              <div class="field">
                <span class="label">Ämne:</span> ${subject || "Ej angivet"}
              </div>
              <div class="field">
                <span class="label">Meddelande:</span>
                <div style="margin-top:10px;white-space:pre-wrap;">${message || "Inget meddelande"}</div>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info);

    return NextResponse.json({ success: true, info }, { status: 200 });
  } catch (error) {
    console.error("Error in /api/SendMail:", error);
    return NextResponse.json(
      { error: "Internal Server Error", detail: error.message },
      { status: 500 }
    );
  }
}
