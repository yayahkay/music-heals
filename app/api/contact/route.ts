import { NextResponse } from "next/server";
import { Resend } from "resend";
import prisma from "@/lib/prisma";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      reason,
      subject,
      message,
      consent,
    } = body;

    if (
      !fullName?.trim() ||
      !email?.trim() ||
      !reason?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (consent !== true) {
      return NextResponse.json(
        { error: "You must agree to the privacy consent." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    const submission = await prisma.contactSubmission.create({
      data: {
        fullName: fullName.trim(),
        email: normalizedEmail,
        phone: phone?.trim() || null,
        reason: reason.trim(),
        subject: subject.trim(),
        message: message.trim(),
        consent: true,
        emailStatus: "pending",
      },
    });

    const safeName = escapeHtml(fullName.trim());
    const safeEmail = escapeHtml(normalizedEmail);
    const safePhone = escapeHtml(phone?.trim() || "Not provided");
    const safeReason = escapeHtml(reason.trim());
    const safeSubject = escapeHtml(subject.trim());
    const safeMessage = escapeHtml(message.trim()).replaceAll("\n", "<br />");

    const { error: emailError } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ||
        "Music Heals Website <onboarding@resend.dev>",
      to: [
        process.env.CONTACT_TO_EMAIL ||
          "musichealsinitiativesierraleon@gmail.com",
      ],
      replyTo: normalizedEmail,
      subject: `Website Contact: ${subject.trim()}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1f2937;">
          <h2 style="color:#123f49;">New Music Heals Website Enquiry</h2>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone / WhatsApp:</strong> ${safePhone}</p>
          <p><strong>Reason:</strong> ${safeReason}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>

          <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />

          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>

          <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />

          <p style="font-size:12px;color:#6b7280;">
            Submission ID: ${submission.id}
          </p>
        </div>
      `,
    });

    if (emailError) {
      await prisma.contactSubmission.update({
        where: { id: submission.id },
        data: { emailStatus: "failed" },
      });

      console.error("Resend error:", emailError);

      return NextResponse.json(
        {
          error:
            "Your message was saved, but the email notification could not be sent.",
        },
        { status: 502 }
      );
    }

    await prisma.contactSubmission.update({
      where: { id: submission.id },
      data: { emailStatus: "sent" },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message was sent successfully.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}