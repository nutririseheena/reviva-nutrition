import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone, email, concern } = await req.json();

    const { error } = await resend.emails.send({
      from: "Reviva Nutrition <onboarding@resend.dev>",
      to: ["nutririseheena@gmail.com"],
      subject: "New Consultation Request",
      html: `
        <h2>New Consultation Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Health Concern:</strong> ${concern || "Not provided"}</p>
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
