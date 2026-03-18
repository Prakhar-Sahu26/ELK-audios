import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const consultationSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().optional(),
  preferredDateTime: z.string().optional(),
  needs: z.string().optional(),
  message: z.string().optional(),
});

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function sendResendEmail(params: {
  apiKey: string;
  from: string;
  to: string;
  subject: string;
  text: string;
  html?: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${params.apiKey}`,
    },
    body: JSON.stringify({
      from: params.from,
      to: params.to,
      subject: params.subject,
      text: params.text,
      html: params.html,
    }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    const message =
      body?.error?.message ||
      body?.message ||
      `Resend request failed with status ${res.status}`;
    throw new Error(message);
  }
}

export async function POST(req: NextRequest) {
  try {
    const json = await req.json().catch(() => null);
    const parsed = consultationSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request body", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const {
      fullName,
      email,
      phone,
      company,
      preferredDateTime,
      needs,
      message,
    } = parsed.data;

    const sheetId =
      process.env.GOOGLE_SHEET_ID || process.env.GOOGLE_SHEETS_ID || "";
    const clientEmail =
      process.env.GOOGLE_CLIENT_EMAIL || process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || "";
    const privateKeyRaw = process.env.GOOGLE_PRIVATE_KEY || "";

    if (!sheetId || !clientEmail || !privateKeyRaw) {
      return NextResponse.json(
        { error: "Google Sheets environment variables not configured" },
        { status: 500 }
      );
    }

    const privateKey = privateKeyRaw.replace(/\\n/g, "\n");

    // Normalize optional fields so empty strings don't get stored.
    const companyVal = company?.trim() ? company.trim() : "";
    const preferredVal = preferredDateTime?.trim() ? preferredDateTime.trim() : "";
    const needsVal = needs?.trim() ? needs.trim() : "";
    const messageVal = message?.trim() ? message.trim() : "";

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const now = new Date();
    const istTime = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "short",
      timeStyle: "medium",
    }).format(now);

    // Store timestamp + all fields in a single row.
    const row = [
      istTime,
      fullName,
      email,
      phone,
      companyVal,
      preferredVal,
      needsVal,
      messageVal,
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "A:Z",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [row],
      },
    });

    const adminEmail = process.env.ADMIN_EMAIL || "";
    const emailApiKey = process.env.EMAIL_API_KEY || "";

    if (!adminEmail || !emailApiKey) {
      return NextResponse.json(
        { error: "Email environment variables not configured" },
        { status: 500 }
      );
    }

    // 1) Admin email with full details
    const adminSubject = "New Consultation Request";
    const adminText =
      [
        "A new consultation request has been received.",
        "",
        `Timestamp: ${istTime}`,
        `Full Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Company / Organization: ${companyVal || "-"}`,
        `Preferred Date & Time: ${preferredVal || "-"}`,
        `Tell Us About Your Needs: ${needsVal || "-"}`,
        `Message: ${messageVal || "-"}`,
      ].join("\n") + "\n";

    const adminHtml =
      `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;">
        <h2 style="margin:0 0 12px 0;">New Consultation Request</h2>
        <p style="margin:0 0 16px 0;">A new consultation request has been received.</p>
        <ul style="padding-left: 18px; margin: 0;">
          <li><strong>Timestamp:</strong> ${escapeHtml(istTime)}</li>
          <li><strong>Full Name:</strong> ${escapeHtml(fullName)}</li>
          <li><strong>Email:</strong> ${escapeHtml(email)}</li>
          <li><strong>Phone:</strong> ${escapeHtml(phone)}</li>
          <li><strong>Company / Organization:</strong> ${escapeHtml(companyVal || "-")}</li>
          <li><strong>Preferred Date &amp; Time:</strong> ${escapeHtml(preferredVal || "-")}</li>
          <li><strong>Tell Us About Your Needs:</strong> ${escapeHtml(needsVal || "-")}</li>
          <li><strong>Message:</strong> ${escapeHtml(messageVal || "-")}</li>
        </ul>
      </div>
    `.trim();

    await sendResendEmail({
      apiKey: emailApiKey,
      from: adminEmail,
      to: adminEmail,
      subject: adminSubject,
      text: adminText,
      html: adminHtml,
    });

    // 2) User confirmation email
    const userSubject = "We received your request";
    const userText =
      [
        `Hi ${fullName},`,
        "",
        "Thank you for reaching out to ELK Audios.",
        "We’ve received your consultation request and our team will get back to you shortly.",
        preferredVal ? `Preferred date/time noted: ${preferredVal}` : "",
        "",
        "If you have any additional details, just reply to this email.",
        "",
        "Best regards,",
        "ELK Audios",
      ]
        .filter(Boolean)
        .join("\n") + "\n";

    const userHtml =
      `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;">
        <p style="margin:0 0 10px 0;">Hi <strong>${escapeHtml(fullName)}</strong>,</p>
        <p style="margin:0 0 10px 0;">Thank you for reaching out to ELK Audios.</p>
        <p style="margin:0 0 16px 0;">We’ve received your consultation request and our team will get back to you shortly.</p>
        ${
          preferredVal
            ? `<p style="margin:0 0 16px 0;"><strong>Preferred date/time:</strong> ${escapeHtml(preferredVal)}</p>`
            : ""
        }
        <p style="margin:0 0 10px 0;">If you have any additional details, just reply to this email.</p>
        <p style="margin:0;">Best regards,<br/>ELK Audios</p>
      </div>
    `.trim();

    await sendResendEmail({
      apiKey: emailApiKey,
      from: adminEmail,
      to: email,
      subject: userSubject,
      text: userText,
      html: userHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Consultation submission failed:", error);
    return NextResponse.json(
      { error: "Failed to process consultation request" },
      { status: 500 }
    );
  }
}

