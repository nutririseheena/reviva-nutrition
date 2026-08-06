import { Resend } from "resend";
import { siteConfig } from "@/data/site";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !subject?.trim()) {
      return Response.json({ success: false }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email).trim())) {
      return Response.json({ success: false }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Reviva Nutrition <onboarding@resend.dev>",
      to: [siteConfig.contact.email],
      subject: `Contact Us: ${subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message || "Not provided"}</p>
      `,
    });

    if (error) {
      return Response.json({ success: false }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false }, { status: 500 });
  }
}
