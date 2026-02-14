import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const role = formData.get("role") as string;
    const message = formData.get("message") as string;
    const resumeFile = formData.get("resume") as File | null;

    if (!name || !email || !role) {
      return NextResponse.json(
        { error: "Name, email, and role are required" },
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
    let attachment: { filename: string; content: Buffer } | undefined;
    if (resumeFile && resumeFile.size > 0) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      attachment = {
        filename: resumeFile.name || "resume.pdf",
        content: buffer,
      };
    }

    const { data, error } = await resend.emails.send({
      from: "Active Digital Solution <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "adam@activedigitalsolution.com",
      reply_to: email,
      subject: `Career Application: ${role} from ${name}`,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Applying for:</strong> ${role}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No cover letter provided"}</p>
      `,
      attachments: attachment ? [attachment] : undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Career API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
