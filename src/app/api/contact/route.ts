import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/site";

const RECIPIENT = SITE.emailTo;
const FROM = SITE.emailFrom;

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();

    const { name, email, service_required, message, locale } = body ?? {};

    if (
      typeof name !== "string" || !name.trim() ||
      typeof email !== "string" || !email.trim() ||
      typeof message !== "string" || !message.trim()
    ) {
      return NextResponse.json(
        { ok: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const isSpanish = locale === "es";

    // Notify the business
    await resend.emails.send({
      from: FROM,
      to: [RECIPIENT],
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission — Pipebusters Lanzarote</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service required:</strong> ${service_required || "Not specified"}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
        ${isSpanish ? "<p><em>(Submitted via Spanish form)</em></p>" : ""}
      `,
    });

    // Confirmation to the customer
    const confirmSubject = isSpanish
      ? "Hemos recibido tu mensaje - Pipebusters Lanzarote"
      : "We've received your message - Pipebusters Lanzarote";

    const confirmHtml = isSpanish
      ? `
        <h2>Gracias por contactar con Pipebusters Lanzarote, ${name}!</h2>
        <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo en un plazo de 24 horas.</p>
        <br>
        <p>Saludos,<br>Pipebusters Lanzarote</p>
        <p style="color:#666;font-size:12px;">Detección de Fugas y Fontanería Profesional en Lanzarote</p>
      `
      : `
        <h2>Thank you for contacting Pipebusters Lanzarote, ${name}!</h2>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <br>
        <p>Best regards,<br>Pipebusters Lanzarote</p>
        <p style="color:#666;font-size:12px;">Professional Leak Detection &amp; Plumbing in Lanzarote</p>
      `;

    await resend.emails.send({
      from: FROM,
      to: [email],
      subject: confirmSubject,
      html: confirmHtml,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: unknown) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send message. Please email us directly." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: false }, { status: 405 });
}
