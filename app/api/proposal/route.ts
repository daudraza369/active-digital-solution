import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "Active Digital Solution <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "adam@activedigitalsolution.com",
      reply_to: email,
      subject: subject || `Proposal Request from ${name}`,
      html: `
        <h2>New Proposal Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "Proposal request"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No additional message"}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Proposal API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
